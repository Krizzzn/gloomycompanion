'use strict';

class TinyCentralDispatch {

    constructor(disable_default_listener){
        this.subscribers = {};

        if (disable_default_listener)
            return;

        // adding a default listener
        this.listen("default", undefined, console.log);
    }

    // subscribe to events
    //  events:                 array of events or single event 
    //  predicate_or_source:    filter events by providing a predicate or the expected source object (triggered 
    //                          if expected source object matches the given source object)
    //  callback:               called when event is registered
    listen(events, predicate_or_source, callback, settings){
        events = [].concat(...[events]);

        events.forEach((event) => {
            this.subscribers[event] = this.subscribers[event] || [];

            let event_settings = { callback: callback };

            if (typeof predicate_or_source === 'function')
                event_settings.predicate = predicate_or_source;
            else
                event_settings.source = predicate_or_source;
            event_settings.priority = ((settings || {}).priority || 5);

            this.subscribers[event].push(event_settings);
        });
    }

    // dispatch an event
    //  events:         array of events or single event that shall be invoked
    //  invoked_by:     object that triggers the event (see: listen:predicate_or_source)
    //  parameters:     parameters that get passed to the callback function 
    dispatch(events, invoked_by, parameters){
        parameters = parameters || {};
        events = [].concat(...[events]);

        events.forEach((event) => {

            if (!this.subscribers[event]){
                parameters._event = event;
                return this.dispatch("default", invoked_by, parameters);
            }

            this.subscribers[event].sort((a,b) => a.priority - b.priority)
                                   .filter((subscriber) => {
                if (subscriber.predicate) return subscriber.predicate(invoked_by, parameters);
                if (!subscriber.source) return true;
                if (invoked_by === subscriber.source) return true;
                return false;

            }).forEach((subscriber) => subscriber.callback(parameters));

            if (this.subscribers["*"])
                this.subscribers["*"].forEach((subscriber) => subscriber.callback(parameters));
        });
    }

    // clicking a dom_element raises an event
    //  dom_element:        DOM element that shall react on click
    //  event:              name of the event invoked
    //  invoked_by:         object that triggers the event (see: listen:predicate_or_source)
    //  parameters:     parameters that get passed to the callback function 
    onclick(dom_element, event, invoked_by, parameters){
        if (!event) return;

        dom_element.addEventListener('click', () => {
            this.dispatch(event, invoked_by, parameters);
        });
    }
}

let eventbus = new TinyCentralDispatch();
export default eventbus;