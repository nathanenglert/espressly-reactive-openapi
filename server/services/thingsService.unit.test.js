import ThingsService from './thingsService';

describe('ThingsService', () => {
  describe('#getThings()', () => {
    it('should return empty with no things', async () => {
      const service = new ThingsService();
      const res = await service.getThings();

      expect(res.length).toBe(0);
    });

    it('should return a thing', async () => {
      const expected = { name: 'foo' };
      const service = new ThingsService([expected]);
      const res = await service.getThings();

      expect(res.length).toBe(1);
      expect(res).toContain(expected);
    });
  });

  describe('#createThing(thing)', () => {
    it('should add a thing to things array', async () => {
      const things = [];
      const expected = { name: 'foo' };
      const service = new ThingsService(things);
      await service.createThing(expected);

      expect(things.length).toBe(1);
      expect(things).toContain(expected);
    });
  });
});
