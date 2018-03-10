'use strict';

import { document_load } from '../utils.js';
import eventbus from '../tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '../constants.js';

import Progress from '../progress.js';

class TurnDetect{

    constructor(){
        this.progressbar = document.getElementById("progress");
        this.progress = new Progress((percent, done) => this.show_bar(percent, done), 4000);
        this.turn = 0;

        eventbus.listen(__.CARDS_DRAWN, (deck) => deck.type === DECK_TYPES.ABILITY && deck.is_active , ()=> this.progress.start());
        eventbus.listen(__.DECK_SHUFFLED, (deck) => deck.type === DECK_TYPES.ABILITY , ()=> this.progress.restart());
        eventbus.listen(__.UNDO_LAST_MOVE, undefined, ()=> this.abort());
        eventbus.listen(__.SCENARIO_LOADED, undefined, () => this.reset());
    }

    abort(){
        this.progress.stop();
        this.show_bar(0, false);
    }

    reset(){
        this.turn = 0;
        eventbus.dispatch(__.ROUND_NEW, this, {turn: this.turn});
    }

    show_bar(percent, done){
        this.progressbar.style.width = (Math.floor(percent*100000)/1000)+"%";

        if (done){
            this.turn++;
            this.progressbar.style.width = "0%";
            eventbus.dispatch(__.ROUND_NEW, this, {turn: this.turn});
        }
    }
}

let detect;

document_load(() => detect = new TurnDetect() );

export default detect;