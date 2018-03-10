'use static'

import { document_load } from '../../utils.js';
import eventbus from '../../tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '../../constants.js';

import DeckState from './deckstate.js';

export class DeckUndoManager{

    constructor(){

        this.states = {};
        this.events = [];
        this.decks = [];

        eventbus.listen(__.DECK_SHUFFLED, undefined, param => this.store_state(param.deck, new DeckState(param.deck)));        
        eventbus.listen(__.CARDS_DRAWN, undefined, param => this.store_state(param.deck, new DeckState(param.deck, param.cards.length)));
        eventbus.listen(__.UNDO_LAST_MOVE, undefined, () => this.undo());
    }

    store_state(deck, state){

        let k = this.get_symbol(deck);

        if (!this.states[k])
            this.states[k] = [];
        this.states[k].push(state);
        this.events.push(k);
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

        if (!last_deck)
            return;

        let event_stack = this.states[last_deck];

        if (event_stack.length < 2)
            return;

        event_stack.pop();
        let prev_state = event_stack[event_stack.length-1];
        this.set_state(last_deck, prev_state);
    }

    set_state(deck, prev_state){

        let found = this.decks.find(a => a.key === deck);

        if (!found)
            return;

        prev_state.restore(found.deck);
        eventbus.dispatch(__.DECK_STATE, found.deck, {deck: found.deck, cards: prev_state.drawn});
    }

    reset(){
        this.states = {};
        this.events = [];
        this.decks = [];
    }
}

let deck_manager; 
document_load(() => {
    deck_manager = new DeckUndoManager();
    window.undo = deck_manager;
});

export default deck_manager;

