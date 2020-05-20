class Things {
  init(api, thingsService) {
    api.register({
      getThings: (c, req, res) => {
        return thingsService
          .getThings()
          .then((data) => res.status(200).json(data));
      },
      postThings: (c, req, res) => {
        return thingsService
          .createThing(req.body)
          .then((data) => res.status(201).json(data));
      },
    });
  }
}

export default new Things();
