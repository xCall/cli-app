export * from './user';
export * from './data';

const applyMiddlewares = (...fn) => arg => fn.reduce((returned, fn) => fn(returned), arg);
export default applyMiddlewares;