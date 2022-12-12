import { BrowserContext, Page } from '@playwright/test';

import BaseActions from './base/base.actions';
import HeaderActions from './base/header.actions';
import NavigationSectionActions from './base/navigation-section.actions';
import LoginActions from './login.actions';
import RegisterActions from './register.actions';

export default class App {
  base: BaseActions;
  header: HeaderActions;
  login: LoginActions;
  register: RegisterActions;
  navigation: NavigationSectionActions;

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseActions(page, context);
    this.header = new HeaderActions(page, context);
    this.login = new LoginActions(page, context);
    this.register = new RegisterActions(page, context);
    this.navigation = new NavigationSectionActions(page, context);
  }
}
