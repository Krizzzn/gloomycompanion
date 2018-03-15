'use strict';

import toggle_class from '../utils.js';

export class Card {
    constructor(type, shuffle, content){
    	this.type = type;
		this.shuffle_next_round = shuffle || false;
		this.content = content || {};
    }
}

export default Card;