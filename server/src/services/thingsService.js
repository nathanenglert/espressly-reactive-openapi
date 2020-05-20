export default class ThingsService {
  constructor(things = []) {
    this.things = things;
  }

  createThing(thing) {
    thing._id = this.things.length + 1;
    this.things.push(thing);

    return Promise.resolve(thing);
  }

  getThings() {
    return Promise.resolve(this.things);
  }
}
