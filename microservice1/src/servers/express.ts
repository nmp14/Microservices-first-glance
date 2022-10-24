import express from "express";

class App {
  private app: express.Express;
  private PORT = process.env.PORT || 44361;

  constructor () {
    this.app = express();
  }

  get port () {
    return this.PORT;
  }

  public start() {
    this.app.listen(() => {
      console.log(`Listening on port: ${this.port}`);
    });
  }
};

export default App;