import {validateArgs} from '../utils/args';

export const validateDataMiddleware = fields => args => {
  const validation = validateArgs(args.data, fields);

  if(!validation.valid) {
    throw new Error(validation.message);
  }

  return args;
}