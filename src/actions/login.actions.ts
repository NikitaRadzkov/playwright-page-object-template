import { BrowserContext, expect, Page } from '@playwright/test';

import LoginPage from '../pages/login.page';
import BaseActions from './base/base.actions';

class LoginActions extends BaseActions {
  loginPage: LoginPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.loginPage = new LoginPage(page, context);
  }

  async enterUsername(username: string) {
    await this.loginPage.usernameInput.type(username);
    expect(this.loginPage.usernameInput).toHaveValue(username);
  }

  async enterPassword(password: string) {
    await this.loginPage.passwordInput.type(password);
    expect(this.loginPage.passwordInput).toHaveValue(password);
  }

  async clickLoginBtn() {
    await this.loginPage.loginBtn.click();
  }
}

export default LoginActions;
