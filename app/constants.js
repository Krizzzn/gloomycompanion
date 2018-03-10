'use strict';

const DECK_TYPES = {
    MODIFIER: "modifier",
    ABILITY: "ability"
};

const EVENTS = { 
    CARDS_DRAW: 'cards_draw',
    CARDS_DRAWN: 'cards_drawn',
    DECK_LOAD: 'deck_load',
    DECK_LOADED: 'deck_loaded',
    DECK_REMOVE: 'deck_remove',
    DECK_REMOVED: 'deck_removed',
    DECK_SHUFFLE: 'deck_shuffle',
    DECK_SHUFFLED: 'deck_shuffled',
    DECK_STATE: 'deck_state',
    DECKS_ORDER: 'decks_order',
    DECKS_ORDERED: 'decks_ordered',
    DECKS_USAGE: 'decks_usage',
    MENU_LEVEL: 'menu_level',
    MENU_SCENARIO: 'menu_scenario',
    MODIFIER_CARD_ADD: 'modifier_card_add',
    MODIFIER_CARD_ADDED: 'modifier_card_added',
    MODIFIER_CARD_REMOVE: 'modifier_card_remove',
    MODIFIER_CARD_REMOVED: 'modifier_card_removed',
    MODIFIER_DECK_CHANGED: 'modifier_deck_changed',
    ROUND_END: 'round_end',
    ROUND_NEW: 'round_new',
    SCENARIO_LOAD: 'scenario_load',
    SCENARIO_LOADED: 'scenario_loaded',
    SCROLL: 'scroll',
    SETTINGS_PAGE: 'settings_page',
    SETTINGS_PANE: 'settings_pane',
    SHUFFLE_REQUIRED: 'shuffle_required',
    UNDO_LAST_MOVE: 'undo_last_move'
};

export { DECK_TYPES, EVENTS };
export default {};