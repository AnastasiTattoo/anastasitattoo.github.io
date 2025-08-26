export class EventController {
  events = {};

  reset() {
    this.events = {};
  }

  getRandomEventName = (name = '') => {
    return `${name.replaceAll(' ', '')}_${parseInt(Math.random() * 1000000)}`;
  }

  registerEvent = (eventName, event) => {
    if (this.events[eventName]) {
      console.warn(`/src/utils/EventController > registerEvent [LINE 6]: Event "${eventName}" is rewritten.`);
    }

    this.events[eventName] = event;
  };

  removeEvent = (eventName) => {
    if (!this.events[eventName]) {
      console.warn(`/src/utils/EventController > removeEvent [LINE 14]: No event "${eventName}" found.`);
      return;
    }

    delete this.events[eventName];
  }

  callEvent = (eventName) => {
    if (!this.events[eventName]) {
      console.warn(`/src/utils/EventController > callEvent [LINE 23]: No event "${eventName}" found.`);
      return;
    }

    this.events[eventName]();
  };
};

export default EventController;
