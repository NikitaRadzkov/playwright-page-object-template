import { BrowserContext, Page } from '@playwright/test';
import BasePage from './base.page';

class NavigationSection extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  get pagesBtn() {
    return this.page.locator('.icon-design');
  }

  get dataBtn() {
    return this.page.locator('.icon-data');
  }

  get appSettingsBtn() {
    return this.page.locator('.icon-dashboard');
  }

  get signinAndSingupBtn() {
    return this.page.locator('.icon-signin');
  }

  get automationsBtn() {
    return this.page.locator('.icon-workflow');
  }
}

export default NavigationSection;
