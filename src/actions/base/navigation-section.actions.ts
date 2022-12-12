import { BrowserContext, expect, Page } from '@playwright/test';

import { Utils } from '../../types/utils.types';
import routeUtils from '../../utils/routes.utils';
import NavigationSectionPage from '../../pages/base/navigation-section.page';
import BaseActions from './base.actions';

class NavigationSectionActions extends BaseActions {
  navigationSectionPage: NavigationSectionPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.navigationSectionPage = new NavigationSectionPage(page, context);
  }

  async waitForUrl(route: Utils.Routes) {
    await this.navigationSectionPage.page.waitForNavigation({ timeout: 15000 });
    const url = this.navigationSectionPage.page.url();
    expect(url).toContain(route);
  }

  async navigateToAppSetting() {
    await this.navigationSectionPage.appSettingsBtn.click();
    this.waitForUrl(routeUtils.layout);
  }

  async navigateToSigninAndSingup() {
    await this.navigationSectionPage.signinAndSingupBtn.click();
    this.waitForUrl(routeUtils.signup);
  }

  async navigateToAutomations() {
    await this.navigationSectionPage.automationsBtn.click();
    this.waitForUrl(routeUtils.automations);
  }
}

export default NavigationSectionActions;
