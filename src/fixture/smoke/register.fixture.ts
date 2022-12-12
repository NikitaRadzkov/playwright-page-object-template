import routes from '../../utils/routes.utils';

const registerData = {
  firstName: 'test first name',
  lastName: 'test last name',
  email: `robocop${Date.now()}@mail.com`,
  password: '12345'
};

export default {
  registerData,
  url: routes.projects
};
