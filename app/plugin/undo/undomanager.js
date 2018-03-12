'use static'

import { document_load } from '../../utils.js';
import eventbus from '../../tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '../../constants.js';

import DeckState from './deckstate.js';
import RoundState from './roundstate.js';

export class UndoManager{

    constructor(){

        this.scenario;
        this.states = {};
        this.events = [];
        this.decks = [];

        eventbus.listen(__.SCENARIO_LOAD, undefined, (param) => this.reset_on_load(param.scenario.name), {priority: 1});
        eventbus.listen(__.ROUND_NEW, undefined, param => this.store_state("round", new RoundState(param.turn)));
        eventbus.listen(__.DECK_SHUFFLED, undefined, param => this.store_state(this.get_symbol(param.deck), new DeckState(param.deck)));       
        eventbus.listen(__.CARDS_DRAWN, undefined, param => this.store_state(this.get_symbol(param.deck), new DeckState(param.deck, param.cards.length)));
        eventbus.listen(__.UNDO_LAST_MOVE, undefined, () => this.undo());
        
    }

    reset_on_load(scenario){

        if (this.scenario !== undefined && this.scenario !== scenario){
            this.states = {};
            this.events = [];
            this.decks = [];
        }
        this.scenario = scenario;
    }

    store_state(key, state){

        if (!this.states[key])
            this.states[key] = [];
        this.states[key].push(state);
        this.events.push(key);
    }

    get_symbol(deck){

        let found = this.decks.find(a => a.deck === deck);

        if (found)
            return found.key;

        this.decks.push({key: Symbol(this.decks.length), deck: deck});
        return this.get_symbol(deck);
    }

    undo(){

        let last_deck = this.events.pop();

        if (!last_deck || this.events.length === 0)
            return;

        let event_stack = this.states[last_deck];

        if (event_stack.length === 0)
            return;

        event_stack.pop();

        if (event_stack.length === 0 && last_deck !== "round")
            this.remove_deck(last_deck);
        else {
            let prev_state = event_stack[event_stack.length-1];
            this.set_state(last_deck, prev_state);
        }
    }

    set_state(deck, prev_state){

        if (prev_state instanceof DeckState)
            return this.set_deck_state(deck, prev_state);
        else if (prev_state instanceof RoundState){
            eventbus.dispatch(__.UNDO_LAST_ROUND, this, {turn: prev_state.round});
            this.undo();
        }
    }

    set_deck_state(deck, prev_state){

        let found = this.decks.find(a => a.key === deck);

        if (!found)
            return;

        prev_state.restore(found.deck);
        eventbus.dispatch(__.DECK_STATE, found.deck, {deck: found.deck, cards: prev_state.drawn});
        eventbus.dispatch(__.SHUFFLE_REQUIRED, found.deck, {deck: found.deck});
    }

    remove_deck(deck){

        let found = this.decks.find(a => a.key === deck);

        if (!found)
            return;

        eventbus.dispatch(__.DECK_REMOVE, this, {deck: found.deck});
    }

    reset(){
        this.states = {};
        this.events = [];
        this.decks = [];
    }
}

let deck_manager; 
document_load(() => {
    deck_manager = new UndoManager();

    window.u = deck_manager;
});

export default deck_manager;

