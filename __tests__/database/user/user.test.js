import { getUserByUid } from 'database/user/read';
import { loadDatabase } from 'database/file.js';

jest.mock('database/file.js');
jest.mock('database/path.js');
const mockUsuario ={
  uid: 'abc-1234',
  userName: 'nomeDeUsuario',
  name: 'nome',
  lastName: 'DeUsuario',
  email: 'email.nome@usuario.com',
  password: 'senhasupersecreta',
  role: 'USER'
};

loadDatabase.mockResolvedValue([mockUsuario]);

it('Encontra usuário quando encontra UID', async () => {
  expect.assertions(1);
  const usuario = await getUserByUid('abc-1234');
  expect(usuario.userName).toEqual(mockUsuario);
});

it('Dispara um erro caso usuário não seja encontrado',async ()=> {
  expect.assertions(1);
  try {
    await getUserByUid('uid-nao-existe');
  } catch (err) {
    expect(err.message).toEqual('Não existe usuário com uid informado.');
  }
});

it('Deve conter pelo menos 1 asserção', () => {
  expect.assertions(1);
  await Promise.resolve(1);
});