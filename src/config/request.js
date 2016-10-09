import LS from '../utils/localStorage';

const PREFIX = '//localhost:3000';
const TOKEN = LS.get('cast_jwt');

export {
  PREFIX,
  TOKEN,
};
