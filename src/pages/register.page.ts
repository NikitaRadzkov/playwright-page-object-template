import BasePage from './base/base.page';

class RegisterPage extends BasePage {
  get firstNameInput() {
    return this.page.locator("[data-control='first_name']");
  }

  get lastNameInput() {
    return this.page.locator("[data-control='last_name']");
  }

  get emailInput() {
    return this.page.locator("[data-control='email']");
  }

  get passwordInput() {
    return this.page.locator("[data-control='password']");
  }

  get repeatPasswordInput() {
    return this.page.locator("[data-control='password_repeat']");
  }

  get createYourFreeAccountBtn() {
    return this.page.locator('.button_primary');
  }
}

export default RegisterPage;
