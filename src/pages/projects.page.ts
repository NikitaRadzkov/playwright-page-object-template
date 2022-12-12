import BasePage from './base/base.page';

class ProjectsPage extends BasePage {
  get projectsSearchInput() {
    return this.page.locator('.projects-search__input');
  }

  get infoBtn() {
    return this.page.locator('.button-info');
  }

  get newAppBtn() {
    return this.page.locator('.project-logo').nth(0);
  }
}

export default ProjectsPage;
