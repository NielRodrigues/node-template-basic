class HelloController {
  index(resquest, response) {
    return response.json({ message: "Hello World!" });
  }
}

export default new HelloController();
