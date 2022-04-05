import logger from '../utils/logger';
import applyMiddlewares, { validateDataMiddleware, isAdminMiddleware } from '../middlewares';
import { createUser } from '../database/user/create';

export const create = async ({ data }) => {
  try {
    const user = await createUser(data);
    logger.log(`
    Usuário criado com sucesso, os dados são: \n
      ----------------------------------------- \n
      '${JSON.stringify(user, null, 2)}'
    `)
  }catch (err) {
    logger.error('Ocorreu um erro ao criar usuário \n', err.message);
  }
}

export default applyMiddlewares(
  isAdminMiddleware,
  validateDataMiddleware(['email', 'password', 'userName', 'name', 'lastName']),
  create
);