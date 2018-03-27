'use strict';

import eventbus from '../tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '../constants.js';

export class DeckRenderer{
    constructor(deck, container){
        this.deck = deck;
        this.container = container;
        this.uiCards = [];
    }

    render(){

        this.uiCards.forEach((c, i) => {
            c.set_depth((i * -1)-1);
            c.attach(this.container);
        });

        eventbus.onclick(this.container, __.CARDS_DRAW, this.deck, {cards: 1});
        eventbus.listen(__.CARDS_DRAWN, this.deck, (p) => this.ondrawn(p.cards) );
        eventbus.listen(__.DECK_SHUFFLED, this.deck, (p) => this.onshuffled(p.deck) );
        eventbus.listen(__.DECK_STATE, this.deck, (p) => this.load_state(p) );

        return this.uiCards;
    }

    remove(){
        this.container.remove();
    }

    remove_drawn(){
        this.uiCards.forEach((card, i) => {
            card.discard();
            card.set_depth((i * -1)-1);
            card.split(0);
        });
    }

    ondrawn(cards) {
        this.uiCards.forEach((c) => {
            c.push_down();
            c.removeClass("pull");
        });

        cards.forEach((card, i) => {
            let uiCard = this.uiCards.find((uc) => uc.card === card);
            this.move_to_top(uiCard);

            uiCard.split(i, cards.length);
            uiCard.draw();
        }); 
    }

    load_state(p){

        var drawCount = p.cards;
        var cards = [];

        while (drawCount > 0){

            let card = this.deck.discard[this.deck.discard.length - drawCount];
            cards.push(card);
            drawCount--;
        }

        if (p.cards === 0)
            this.remove_drawn();
        this.ondrawn(cards);
    }

    onshuffled(deck){

        if (deck.type === DECK_TYPES.ABILITY || deck.discard.length === 0)
            this.remove_drawn();
        
        let uiCards = this.get_uicards_from_pile(deck);

        window.setTimeout(()=>{
            let topCard = uiCards[0];
            this.move_to_top(topCard);
            topCard.shuffle();
        },500);
    }

    get_uicards_from_pile(deck){
        return this.uiCards.filter(uicard => {
            return deck.cards.includes(uicard.card);
        });
    }

    move_to_top(uiCard){
        let topCard = this.container.children[0];
        this.container.insertBefore(uiCard.front,topCard);
        this.container.insertBefore(uiCard.back,topCard);
    }
}

export default DeckRenderer; 