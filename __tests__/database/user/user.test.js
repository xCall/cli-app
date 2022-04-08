import { getUserByUid } from '../../../src/database/user/read';
import { loadDatabase } from '../../../src/database/file.js';

jest.mock('../../../src/database/path.js');
jest.mock('../../../src/database/file.js');

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
  const usuario = await getUserByUid('abc-1234');
  expect(usuario.userName).toEqual(mockUsuario);
});

it('Dispara um erro caso usuário não seja encontrado',async ()=> {
  try {
    await getUserByUid('uid-nao-existe');
  } catch (err) {
    expect(err.message).toEqual('Não existe usuário com uid informado.');
  }
});