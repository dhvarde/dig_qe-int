class DropdownPage {
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
}

export default new DropdownPage();
