import { Page } from "@playwright/test";

import BaseActions from "./base/base.actions";
import HeaderActions from "./base/header.actions";
import NavigationSectionActions from "./base/navigation-section.actions";
import LoginActions from "./login.actions";
import RegisterActions from "./register.actions";

export default class App {
  base: BaseActions;
  header: HeaderActions;
  login: LoginActions;
  register: RegisterActions;
  navigation: NavigationSectionActions;

  constructor(page: Page) {
    this.base = new BaseActions(page);
    this.header = new HeaderActions(page);
    this.login = new LoginActions(page);
    this.register = new RegisterActions(page);
    this.navigation = new NavigationSectionActions(page);
  }
}
