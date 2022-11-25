import { Page } from "@playwright/test";

import HeaderPage from "../../pages/base/header.page";
import BaseActions from "./base.actions";

export default class HeaderActions extends BaseActions {
  headerPage: HeaderPage;

  constructor(page: Page) {
    super(page);
    this.headerPage = new HeaderPage(page);
  }
}
