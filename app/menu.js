'use strict';

import eventbus from './tinycentraldispatch.js';
import { EVENTS as __ } from './constants.js';
import { document_load, toggle_class } from './utils.js';

import Scenarios from './menu/scenarios.js';
import Decklist from './menu/decklist.js';
import Rewards from './menu/rewards.js';

class Menu {
    constructor(){
        this.menu =      document.getElementById("settingspane");

        this.pages = {
            scenarios: { tab: document.getElementById("scenariotab"), page: document.getElementById("scenariospage") },
            deck: { tab: document.getElementById("deckstab"), page: document.getElementById("deckspage") }
        };

        this.buttons = {
            settings:       document.getElementById("settingsbtn"),
            cancel:         document.getElementById("cancelarea")       
        };

        eventbus.onclick(this.pages.scenarios.tab, __.SETTINGS_PAGE, this, this.pages.scenarios);
        eventbus.onclick(this.pages.deck.tab, __.SETTINGS_PAGE, this, this.pages.deck);
        eventbus.onclick(this.buttons.settings, __.SETTINGS_PANE, this, {show: true});
        eventbus.onclick(this.buttons.cancel, __.SETTINGS_PANE, this, {show: false});

        eventbus.listen(__.SETTINGS_PAGE, this, (p) => this.show_tab(p));
        eventbus.listen(__.SETTINGS_PANE, this, (p) => this.show_settingspane(p));
        eventbus.listen(__.SCENARIO_LOADED, undefined, () => this.show_settingspane({show: false}));

        new Scenarios();
        new Decklist();
        new Rewards();
    }

    show_tab(param){
        Object.keys(this.pages).forEach((key) => {
            let active = this.pages[key] === param;
            this.pages[key].tab.className = (active) ? "" : "inactive";
            this.pages[key].page.className = (active) ? "tabbody" : "inactive tabbody";          
        });
    }

    show_settingspane(p)
    {
        let panes = document.getElementsByClassName("pane");
        Array.from(panes).forEach((pane) => {
            toggle_class(pane, 'inactive', !p.show);
        });

        this.buttons.cancel.style.display = p.show ? "initial" : "none";
    }

}

let menu;
document_load(() => menu = new Menu());

export default menu;