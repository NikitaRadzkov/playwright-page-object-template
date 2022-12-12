import test from '../test';
import testData from '../../fixture/smoke/register.fixture';
import routes from '../../utils/routes.utils';

// TODO: Add verify email notification
test.describe('Sign up by default', async () => {
  test.beforeEach(async ({ app }) => {
    await app.base.navigateTo(routes.register);
  });

  test('Sign up', async ({ app }) => {
    await app.register.registerByUI(testData.registerData);
    await app.navigation.waitForUrl(testData.url);
  });
});
