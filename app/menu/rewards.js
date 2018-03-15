'use strict';

import eventbus from '../tinycentraldispatch.js';
import { EVENTS as __ } from '../constants.js';

import SCENARIO_LEVELS from '../data/scenario_levels.js';

export class Rewards {
    constructor(){
        this.container = document.getElementById('rewards');
        eventbus.listen(__.MENU_LEVEL, undefined, (level) => this.render(level));

        this.render({level: 1});
    }

    get template() {
        return "<ul>\
            <li><strong>Parameters Level $Level</strong></li>\
            <li><label>Gold Conversion</label><span>&times;$GoldConversion</span></li>\
            <li><label>Experience</label><span>$XP</span></li>\
            <li><label>Trap Damage</label><span>$TrapDamage</span></li>\
        </ul>";
    }

    render(level){
        let level_values = SCENARIO_LEVELS[level.level];
        var element = this.fill_template(level_values);
        this.container.innerHTML = element;
    }

    fill_template(level_values){
        var t = this.template;

        this.template.match(/\$[A-z]+/g).forEach((c) => {
            let replaceWith = level_values[c.substring(1)];
            t = t.replace(c, replaceWith);
        });
        return t;
    }

}

export default Rewards;