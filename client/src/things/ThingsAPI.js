const ThingsAPI = {
  async createThing(thing) {
    var response = await fetch('http://localhost:9000/things', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(thing),
    });

    return response.json();
  },

  async getThings() {
    var response = await fetch('http://localhost:9000/things');

    return await response.json();
  },
};

export default ThingsAPI;
