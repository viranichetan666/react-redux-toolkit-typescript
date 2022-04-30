import HttpClient from "./index";

class CommonApi extends HttpClient {
  constructor(token?: any) {
    super(process.env.REACT_APP_APIBASE!, token);
  }
  public async getStateList() {
    return await this.instance.get("/company/state-list");
  }
}

export default CommonApi;