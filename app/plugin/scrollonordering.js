'use strict';

import { document_load } from '/app/utils.js';
import eventbus from '/app/tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '/app/constants.js';

class ScrollOnOrdering{

    constructor(){

        eventbus.listen(__.DECKS_ORDERED, undefined, ()=> eventbus.dispatch(__.SCROLL, this, {to: 0, duration: 1}) );
    }

}

let listener;

document_load(() => listener = new ScrollOnOrdering() );

export default listener;