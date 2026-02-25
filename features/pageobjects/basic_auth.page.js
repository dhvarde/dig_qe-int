// import { $ } from "@wdio/globals";
// import Page from "./page.js";

class BasicAuthPage {
  async message() {
    return await (await $(".example > p")).getText();
  }

  async login(username, password) {
    await this.open(username, password);
  }
  
  async open(username, password) {
    return await browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`
    );
  }
}

export default new BasicAuthPage();
