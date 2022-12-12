import { BrowserContext, Page } from '@playwright/test';

import BasePage from './base.page';

export default class HeaderPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  get logoImage() {
    return this.page.locator('.customize-toolbar__logo');
  }

  envNameBtn(name = 'Production') {
    return this.page.locator('.customize-toolbar-dropdown-list__item-main').getByText(name);
  }

  get addNewEnvironmentBtn() {
    return this.page.getByText('Add new Environment');
  }

  get myAppsBtn() {
    return this.page.locator('.icon-arrow_backward_2');
  }

  get previewBtn() {
    return this.page.locator("//div[@class='customize-toolbar__section']/*[1]");
  }

  get openPreviewBtn() {
    return this.page.locator("//div[@class='customize-toolbar__section']/*[2]");
  }

  get shareBtn() {
    return this.page.locator("//div[@class='customize-toolbar__section']/*[3]");
  }

  get discardBtn() {
    return this.page.getByText('Discard');
  }

  get publicBtn() {
    return this.page.getByText('Publish');
  }

  get publishedAppBtn() {
    return this.page.locator('.publish-menu-card-item_interactive').nth(0);
  }

  get connectCustomDomainBtn() {
    return this.page.locator('.publish-menu-card-item_interactive').nth(1);
  }

  get profileIcon() {
    return this.page.locator('.button-profile');
  }

  get profileSettings() {
    return this.page.locator('.profile-link');
  }

  get usersAndTeams() {
    return this.page.locator('.dropdown__item').nth(0);
  }

  get billingAndPlans() {
    return this.page.locator('.dropdown__item').nth(1);
  }

  get apiKeys() {
    return this.page.locator('.dropdown__item').nth(2);
  }

  get activityLog() {
    return this.page.locator('.dropdown__item').nth(3);
  }

  get darkMode() {
    return this.page.locator('.dropdown__item').nth(4);
  }

  get Logout() {
    return this.page.locator('.dropdown__item').nth(5);
  }
}
