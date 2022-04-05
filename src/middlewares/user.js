import {isAdmin} from '../constants/roles.js';

export const isAdminMiddleware = (data) => {
  if(!isAdmin(data.user)) {
    throw new Error('Você não possui permissão para executar essa operação');
  }

  return data;
}