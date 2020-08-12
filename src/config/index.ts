const isProduction = process.env.NODE_ENV === 'production';

const BASE_URL = isProduction
  ? 'https://reactflix-backend.herokuapp.com'
  : 'http://localhost:3001';

export default BASE_URL;
