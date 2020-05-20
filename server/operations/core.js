class Core {
  init(api) {
    api.register({
      validationFail: (c, req, res) =>
        res.status(400).json({ err: c.validation.errors }),
      notFound: (c, req, res) => res.status(404).json({ err: 'not found' }),
    });
  }
}

export default new Core();
