'use strict';

import eventbus from '/app/tinycentraldispatch.js';
import { EVENTS as __ } from '/app/constants.js';

import { CAMPAIGNS } from '/app/data/scenarios.js';
import ScenarioSelector from '/app/renderers/scenarioselector.js';
import LevelSelector from '/app/renderers/levelselector.js';

export class Scenarios {
	constructor(){
		this.selected_scenario = {};

		this.form = {
			level: document.getElementById('levels'),
			campaigns: document.getElementById('campaigns')
		};

		eventbus.listen(__.MENU_LEVEL, undefined, (a) => this.selected_scenario.level = a.level);
		eventbus.listen(__.MENU_SCENARIO, undefined, (a) => this.load_scenario(a));

		let levelselector = new LevelSelector(this.form.level);
		levelselector.render();

		Object.keys(CAMPAIGNS).forEach((key) => {
			let selector = new ScenarioSelector(key, CAMPAIGNS[key], this.form.campaigns);
			selector.render();
		});
	}

	load_scenario(scenario){
		this.selected_scenario.scenario = scenario.scenario; 
		this.selected_scenario.campaign = scenario.campaign;

		if (!this.selected_scenario.scenario) return;
		if (!this.selected_scenario.level) return;
		
		eventbus.dispatch(__.SCENARIO_LOAD, this, this.selected_scenario); 
	}
}

export default Scenarios;