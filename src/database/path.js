import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const databasePath = resolve(__dirname, '../../database.json');

export default databasePath;