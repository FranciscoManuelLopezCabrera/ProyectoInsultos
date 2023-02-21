function rootController(req, res) {
  res.status(200).send("Hello Im here!");
}
module.exports = {
  rootController,
};
