import Page from "./page.js";
class CheckboxesPage extends Page{
  get elements() {
    return {
      header: () => $("h3"),
      checkbox: async (num) => await $(`input:nth-of-type(${num})`),
    };
  }

  async getCheckbox(num) {
    return await this.elements.checkbox(num);
  }

  async select(num) {
    const checkbox = await this.getCheckbox(num);
    await checkbox.click();
  }

  async test(num, value = 'checked' | 'unchecked') {
    const checkbox = await this.getCheckbox(num);
    if (value === 'checked') {
      await expect(checkbox).toHaveAttribute(value);
    } else {
      await expect(checkbox).not.toHaveAttribute(value);
    }
  }
  
  async open() {
    await super.open("checkboxes");
  }
}

export default new CheckboxesPage();
