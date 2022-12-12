import BasePage from './base/base.page';

class LoginPage extends BasePage {
  get usernameInput() {
    return this.page.locator("[data-control='username']");
  }

  get passwordInput() {
    return this.page.locator("[data-control='password']");
  }

  get loginBtn() {
    return this.page.locator("//*[contains(text(), 'Login')]");
  }
}

export default LoginPage;
