import BasePage from '../../pages/base/base.page';
import { Utils } from '../../types/utils.types';

export default class BaseActions extends BasePage {
  async navigateTo(route: Utils.Routes) {
    await this.page.goto(route, { timeout: 10000 });
  }
}
