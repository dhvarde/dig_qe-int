import Page from "./page.js";
class InputsPage extends Page{
  get elements() {
    return {
      header: () => $("h3"),
      input: () => $("input[type = 'number']"),
    };
  }

  async set(value) {
    await (await this.elements.input()).setValue(value);
  }

  async test(value) {
    await expect(await this.elements.input()).toHaveValue(value.toString());
  }

  async open() {
    await super.open("inputs");
  }
}

export default new InputsPage();
