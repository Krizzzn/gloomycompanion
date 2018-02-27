'use strict';

import eventbus from '/app/tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '/app/constants.js';

class DetectUnusedDecks{

    constructor(){
        this.decks_drawn = [];
        this.available_decks = [];
        eventbus.listen(__.ROUND_NEW, undefined, (turn) => this.detect_unused(turn));
        eventbus.listen(__.CARDS_DRAWN, (deck) => deck.type === DECK_TYPES.ABILITY , (e) => this.save_deck(e));
        eventbus.listen(__.DECK_LOADED, (deck) => deck.type === DECK_TYPES.ABILITY , (e) => this.available_decks.push(e.deck));
        eventbus.listen(__.DECK_REMOVED, (deck) => deck.type === DECK_TYPES.ABILITY , (e) => this.remove_deck_from_available(e.deck));
    }

    detect_unused(turn){

        if (turn.turn === 0)
            return;

        this.available_decks.forEach((deck) => deck.is_active = false);
        this.decks_drawn.forEach((deck) => deck.is_active = true);

        this.decks_drawn = [];

        this.available_decks = this.available_decks.sort((a,b) => {
            if (a.is_active===b.is_active) return 0;
            if (a.is_active) return -1;
            return 1;
        });

        eventbus.dispatch(__.DECKS_USAGE, undefined, {decks: this.available_decks});
        eventbus.dispatch(__.DECKS_ORDER, undefined, {ordered_decks: this.available_decks});
    }

    save_deck(e){
        if (!e.deck.is_active){
            e.deck.is_active = true;
            eventbus.dispatch(__.DECKS_USAGE, undefined, {decks: [e.deck]});
        }
        this.decks_drawn.push(e.deck);
    }

    remove_deck_from_available(e){
        this.available_decks = this.available_decks.filter((d) => d !== e);
    }
}

let detect = new DetectUnusedDecks();
export default detect;