import { createUser } from '../../../src/database/user/create';
import path from '../../../src/database/path';
import ROLES from '../../../src/constants/roles';
import * as file from '../../../src/database/file';

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

// as duas funções fazem a mesma coisa
//file.loadDatabase.mockImplementation(() => Promise.resolve([]));
file.loadDatabase.mockResolvedValueOnce([]);

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