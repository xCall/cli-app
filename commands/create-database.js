import { saveDatabase } from '../src/database/file.js';
import { createUser } from './user.js';
import logger from '../src/utils/logger.js';
import ROLES from '../src/constants/roles.js';

// Quantidade de cada tipo de usuário
const ADMIN_USER_COUNT = 3;
const DEFAULT_USER_COUNT = 10;

// cria admin padrao para facilitar testes locais
const MOCK_ADMIN = createUser({
  name: 'Ad',
  lastName: 'Min',
  userName: 'admin',
  password: 'admin',
  email: 'iamthe@admin.com',
  role: ROLES.ADMIN
});

// salva JSON com usuários
const saveGenerated = async (user) => {
  try {
    const saved = await saveDatabase(user);
    logger.sucess('Base de usuários criada com sucesso!');
  } catch (err) {
    logger.sucess('Ocorreu um erro ao criar a base de usuários!', err);
  }
}

// cria usuários em lote
const createUserDatabase = (admin, user) => {
  const adminUsers = Array(admin).fill().map(() => createUser({ user: ROLES.ADMIN }));
  const defaultUsers = Array(user).fill().map(() => createUser({ user: ROLES.USER }));

  const users = [
    MOCK_ADMIN,
    ...adminUsers,
    ...defaultUsers,
  ];
  return users;
}

((admin, user) => {
  const users = createUserDatabase(admin, user);
  return saveGenerated(users);
}) (ADMIN_USER_COUNT, DEFAULT_USER_COUNT);
