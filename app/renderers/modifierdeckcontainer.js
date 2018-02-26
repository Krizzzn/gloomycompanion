'use strict';

import eventbus from '/app/tinycentraldispatch.js';
import { EVENTS as __ } from '/app/constants.js';

import ModifierDeckRenderer from '/app/renderers/modifierdeck.js';
import { toggle_class } from '/app/utils.js'; 

export class ModifierDeckContainer {
    constructor(deck, container){

        this.deck = deck;
        this.container = container;

    }
    render(){
        let button_div = document.createElement("div");
        button_div.className = "modifier-deck-column-1";

        button_div.appendChild(this.create_counter_widget("bless", __.MODIFIER_CARD_REMOVE, __.MODIFIER_CARD_ADD));
        button_div.appendChild(this.create_counter_widget("curse", __.MODIFIER_CARD_REMOVE, __.MODIFIER_CARD_ADD));
        button_div.appendChild(this.create_counter_widget("round"));

        let end_round_div = document.createElement("div");
        end_round_div.className = "counter-icon shuffle not-required";

        button_div.appendChild(end_round_div);

        let deck_column = document.createElement("div");
        deck_column.className = "modifier-deck-column-2";

        this.deck_space = document.createElement("div");
        this.deck_space.className = "card-container modifier";

        let draw_two_button = document.createElement("div");
        draw_two_button.className = "button draw-two";

        deck_column.appendChild(this.deck_space);
        deck_column.appendChild(draw_two_button);

        this.container.appendChild(deck_column);
        this.container.appendChild(button_div);
        
        eventbus.onclick(draw_two_button, __.CARDS_DRAW, this.deck, {cards: 2});
        eventbus.onclick(end_round_div, __.ROUND_END, this.deck);

        eventbus.listen(__.SHUFFLE_REQUIRED, this.deck, () => toggle_class(end_round_div, "not-required", false));
        eventbus.listen(__.DECK_SHUFFLED, this.deck, () => toggle_class(end_round_div, "not-required", true));

        let renderer = new ModifierDeckRenderer(this.deck, this.deck_space);
        renderer.render();
    }

    create_counter_widget(card_type, increment_event, decrement_event) {

        let widget_container = document.createElement("div");
        widget_container.className = "counter-icon";

        let background = document.createElement("div");
        background.className = "background " + card_type;
        widget_container.appendChild(background);

        let text_element = document.createElement("div");
        text_element.className = "icon-text";
        text_element.textContent = "0";

        if (increment_event)
            widget_container.appendChild(this.create_button(card_type, "decrement", "-", increment_event, text_element));
        
        widget_container.appendChild(text_element);
        
        if (decrement_event)
            widget_container.appendChild(this.create_button(card_type, "increment", "+", decrement_event, text_element));

        if (card_type === "round")
            eventbus.listen(__.ROUND_NEW, undefined, (e) => { text_element.textContent = e.turn || 0; });
        else
            eventbus.listen(__.MODIFIER_DECK_CHANGED, this.deck, (e) => { if (e[card_type] !== undefined) text_element.textContent = e[card_type]; });

        return widget_container;
    }
    create_button(card_type, class_name, text, event_name) {
        var button = document.createElement("div");
        button.className = class_name + " button";
        button.textContent = text;

        eventbus.onclick(button, event_name, this.deck, {type: card_type});

        return button;
    }
}

export default ModifierDeckRenderer; 
