import { isAdminMiddleware } from 'middlewares/user';
 import ROLES from 'constants/roles';

 const mockUsuario = {
   uid: 'abc-1234',
   userName: 'nomeDoUsuario',
   name: 'nome',
   email: 'email.nome@usuario.com',
   password: 'senhasupersecreta',
 };

 it('Deve retornar os dados do usuário caso a role seja ADMIN', () =>{
  const mockAdmin = {
    user: {
      ...mockUsuario,
      role: ROLES.ADMIN,
    }
  };

  const retorno = isAdminMiddleware(mockAdmin);
  expect(retorno).toEqual(mockAdmin);
 });