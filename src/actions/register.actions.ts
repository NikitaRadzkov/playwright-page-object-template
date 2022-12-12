import { BrowserContext, expect, Page } from '@playwright/test';

import RegisterPage from '../pages/register.page';
import BaseActions from './base/base.actions';

interface RegisterData {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

class RegisterActions extends BaseActions {
  registerPage: RegisterPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.registerPage = new RegisterPage(page, context);
  }

  async enterFirstName(firstName: string) {
    await this.registerPage.firstNameInput.type(firstName);
    expect(this.registerPage.firstNameInput).toHaveValue(firstName);
  }

  async enterLastName(lastName: string) {
    await this.registerPage.lastNameInput.type(lastName);
    expect(this.registerPage.lastNameInput).toHaveValue(lastName);
  }

  async enterEmail(email: string) {
    await this.registerPage.emailInput.type(email);
    expect(this.registerPage.emailInput).toHaveValue(email);
  }

  async enterPassword(password: string) {
    await this.registerPage.passwordInput.type(password);
    expect(this.registerPage.passwordInput).toHaveValue(password);
  }

  async enterRepeatPassword(password: string) {
    await this.registerPage.repeatPasswordInput.type(password);
  }

  async clickCreateYourFreeAccount() {
    await this.registerPage.createYourFreeAccountBtn.click();
  }

  async registerByUI(registerData: RegisterData) {
    await this.enterFirstName(registerData.firstName);
    await this.enterLastName(registerData.lastName);
    await this.enterEmail(registerData.email);
    await this.enterPassword(registerData.password);
    await this.enterRepeatPassword(registerData.password);
    await this.clickCreateYourFreeAccount();
  }
}

export default RegisterActions;
