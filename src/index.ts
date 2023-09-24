import { faker } from '@faker-js/faker';
import { Auth } from './services';
import * as l from './logReg';
import * as i from './ui';
import { Spinner } from './spinner';
async function init() {
  const fake = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.internet.userName()
  };

  const newUser = await Auth.Register(fake);
  console.log('newUser = ', newUser);

  const token = await Auth.Login({ email: fake.email, password: fake.password });
  console.log('token = ', token);

  const user = await Auth.Me(token);
  console.log('user = ', user);
}

init();
i.iniit();
l.loginBtn();
l.registerBtn();
l.submit();
l.logIn();
Spinner();