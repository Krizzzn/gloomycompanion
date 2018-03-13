'use strict';

import { document_load } from '/app/utils.js';
import eventbus from '/app/tinycentraldispatch.js';
import { EVENTS as __, DECK_TYPES } from '/app/constants.js';

class Scroller{

    constructor(scroll_container){
        this.easing = this.easeOutCubic;
        this.scroll_container = scroll_container || window;

        eventbus.listen(__.SCROLL, undefined, (param) => { this.scroll_to(param.to, param.duration); });
    }

    scroll_to(scrollTo, duration){
        var target;

        if (isNaN(scrollTo))
            target = document.getElementById(scrollToId).offsetTop;
        else
            target = parseFloat(scrollTo);

        //with animation
        const from = this.scroll_container.scrollY; //scrollTop
        var by = target - this.scroll_container.scrollY; //scrollTop

        if (from < target) {
            if (target > this.scroll_container.scrollHeight - this.scroll_container.clientHeight) {
                by = (this.scroll_container.scrollHeight - this.scroll_container.clientHeight) - this.scroll_container.scrollY; //scrollTop
            }
        }

        if (by === 0)
            return;
        
        var currentIteration = 0;
        var that = this;
        /**
         * get total iterations
         * 60 -> requestAnimationFrame 60/second
         * second parameter -> time in seconds for the animation
         **/
        const animIterations = Math.round(60 * (duration||0.5));

        (function scroll() {
            
            const value = that.easing(currentIteration, from, by, animIterations);
            console.log(value)
            that.scroll_container.scroll(0, value);
            currentIteration++;
            if (currentIteration < animIterations) {
                requestAnimationFrame(scroll);
            }
        })();
    }

    easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3)  + 1) + startValue;
    }

    linearEase(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * currentIteration / totalIterations + startValue;
    }
}

let scroller; 
document_load(() => scroller = new Scroller() );

export default scroller;

