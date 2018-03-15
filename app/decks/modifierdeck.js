'use strict';

import eventbus from '../tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '../constants.js';

import { Deck } from '../decks/deck.js';
import { Card } from '../decks/card.js';
import { MODIFIER_DECK, MODIFIER_CARDS, CARD_TYPES_MODIFIER } from '../data/modifiercards.js';

export class ModifierDeck extends Deck {
    constructor() {
    	super(DECK_TYPES.MODIFIER, "Monster modifier deck");

    	this.cards = [];
		MODIFIER_DECK.forEach((card) => {
    		var c = new Card(card.type, card.shuffle, {image: card.image});
    		this.cards.push(c);
    	});

        eventbus.listen(__.MODIFIER_CARD_ADD, this, (e) => this.add(e.type));
        eventbus.listen(__.MODIFIER_CARD_REMOVE, this, (e) => this.remove(e.type));
        eventbus.listen(__.ROUND_END, () => this.shuffle_required, () => { this.reset_deck().shuffle();});
    }

    count(card_type){
    	var c = 0;
    	this.cards.forEach((card) => {
    		if (card.type == card_type) c++;
    	});
    	return c;
    }

    add(card_type){
    	let c;
    	if (card_type === CARD_TYPES_MODIFIER.BLESS)
    		c = new Card(MODIFIER_CARDS.BLESS.type, MODIFIER_CARDS.BLESS.shuffle, {image: MODIFIER_CARDS.BLESS.image});
    	else if (card_type === CARD_TYPES_MODIFIER.CURSE)
    		c = new Card(MODIFIER_CARDS.CURSE.type, MODIFIER_CARDS.CURSE.shuffle, {image: MODIFIER_CARDS.CURSE.image});
    	else 
    		return false;

    	if (this.count(c.type) >= 10)
    		return 10;

    	this.cards.push(c);

        eventbus.dispatch([__.MODIFIER_DECK_CHANGED, __.MODIFIER_CARD_ADDED], this, {"card": c, "bless": this.count(CARD_TYPES_MODIFIER.BLESS), "curse": this.count(CARD_TYPES_MODIFIER.CURSE), deck: this });

    	this.shuffle_without_reset();
		return this.count(c.type);
    }

    draw(draw_count, already_drawn){
        const special = [CARD_TYPES_MODIFIER.BLESS, CARD_TYPES_MODIFIER.CURSE];
        
        var drawn = super.draw(draw_count, already_drawn);
        let removed = drawn.find((card) => special.includes(card.type));

        if (removed)
            eventbus.dispatch(__.MODIFIER_DECK_CHANGED, this, {"bless": this.count(CARD_TYPES_MODIFIER.BLESS), "curse": this.count(CARD_TYPES_MODIFIER.CURSE), deck: this });

        return drawn;
    }

    remove(card_type){	
        var removed_card;

    	this.cards = this.cards.filter((c) => {
    		if (removed_card) return true;	
    		if (c.type === card_type){
                removed_card = c;
    			return false;
    		}
    	});

        if (!removed_card)
            return 0;

        eventbus.dispatch([__.MODIFIER_DECK_CHANGED, __.MODIFIER_CARD_REMOVED], this, {"card": removed_card, "bless": this.count(CARD_TYPES_MODIFIER.BLESS), "curse": this.count(CARD_TYPES_MODIFIER.CURSE), deck: this });
        this.shuffle_without_reset();    
		
        return this.count(card_type);
    }

    shuffle_without_reset(){
        let shuffle = this.shuffle_required;
        this.shuffle();
        this.shuffle_required = shuffle;
    }
    
    reset_deck(){
        const special = [CARD_TYPES_MODIFIER.BLESS, CARD_TYPES_MODIFIER.CURSE];
        
        let removed = this.discard.filter((card) => special.includes(card.type));
    	this.discard = this.discard.filter((card) => !special.includes(card.type));

        removed.forEach((c) => eventbus.dispatch([__.MODIFIER_DECK_CHANGED, __.MODIFIER_CARD_REMOVED], this, {"card": c, "bless": this.count(CARD_TYPES_MODIFIER.BLESS), "curse": this.count(CARD_TYPES_MODIFIER.CURSE), deck: this }) );

    	return super.reset_deck();
    }
}