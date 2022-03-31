// permissões

const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
}

// valida se o usuário é americano
export const isAdmin = ({role}) => role === ROLES.ADMIN;

export default ROLES;