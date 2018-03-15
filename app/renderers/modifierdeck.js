'use strict';

import { UICard } from '../renderers/card.js';
import { DeckRenderer } from '../renderers/deck.js';

import eventbus from '../tinycentraldispatch.js';
import { EVENTS as __ } from '../constants.js';

export class ModifierDeckRenderer extends DeckRenderer {
    constructor(deck, container){
        super(deck, container);
    }

    render(){
        this.uiCards = this.deck.cards.map((c) => new UICard(c).init());

        eventbus.listen(__.MODIFIER_CARD_ADDED, this.deck, (e) => this.onadd(e.card));
        eventbus.listen(__.MODIFIER_CARD_REMOVED, this.deck, (e) => this.onremove(e.card));

        return super.render();
    }

    onadd(card) {
        var uicard = new UICard(card).init();
        uicard.attach(this.container);
        uicard.set_depth(-50);
        this.uiCards.push(uicard);
    }

    onremove(card){
        let uiCard = this.uiCards.find((uc) => uc.card === card);
        if (!uiCard)
            return;
        this.uiCards = this.uiCards.filter((uc) => uc !== uiCard);
        uiCard.detach();
    }
}

export default ModifierDeckRenderer; 
