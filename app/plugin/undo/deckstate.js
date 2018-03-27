'use static';

export class DeckState{

    constructor(deck, drawn_count){
        this.cards = [];
        this.discard = [];
        this.drawn = drawn_count || 0;
        this.shuffle_required = deck.shuffle_required;
        this.is_active = deck.is_active;

        deck.cards.forEach(card => this.cards.push(card));
        deck.discard.forEach(card => this.discard.push(card));
    }

    restore(restore_to_deck){

        restore_to_deck.cards = [];
        restore_to_deck.discard = [];

        this.cards.forEach(card => restore_to_deck.cards.push(card));
        this.discard.forEach(card => restore_to_deck.discard.push(card));

        restore_to_deck.shuffle_required = this.shuffle_required;
        restore_to_deck.is_active = this.is_active;
    }

}

export default DeckState;