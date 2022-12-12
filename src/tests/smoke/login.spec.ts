import test from '../test';
import testData from '../../fixture/smoke/login.fixture';
import routes from '../../utils/routes.utils';

test.describe('Login by default', async () => {
  test.beforeEach(async ({ app }) => {
    await app.base.navigateTo(routes.login);
  });

  test('Login', async ({ app }) => {
    await app.login.enterUsername(testData.username);
    await app.login.enterPassword(testData.password);
    await app.login.clickLoginBtn();
    await app.navigation.waitForUrl(testData.url);
  });
});
