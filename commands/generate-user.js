import { createUser } from './user.js';
import looger from '../src/utils/looger.js';
const { uid, ...user } = createUser();

looger.sucess(`
  Usuário criado com sucesso! \n
  Basta copiar o JSON abaixo e colar no campo "data" da CLI \n
  '${JSON.stringify(user, null, 2)}' \n
  ------------- minificado ------------- \n
  '${JSON.stringify(user)}'
`);