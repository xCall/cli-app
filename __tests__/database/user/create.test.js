import { createUser } from '../../../src/database/user/create';
import ROLES from '../../../src/constants/roles';
import * as file from '../../../src/database/file';

beforeEach(() => {
  file.loadDatabase.mockResolvedValueOnce([]);
});
afterEach(() => {
  jest.clearAllMocks();
});
afterAll(() => {
  jest.restoreAllMocks();
});

jest.mock('../../../src/database/file.js');
jest.mock('../../../src/database/path.js');

const usuario = {
  email: 'qualquer@email.com',
  password: 'senha1234',
  userName: 'usuarioQualquer',
  user: 'usuario',
  lastName: 'qualquer',
};

it('Cria um usuário corretamente', async () => {
  expect.assertions(4);
  const user = await createUser(usuario);

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.USER,
  });
});

it('Cria usuário com role ADMIN', async () => {
  expect.assertions(4);
  const user = await createUser({
    ...usuario,
    role: ROLES.ADMIN,
  });
  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.ADMIN,
  });

});