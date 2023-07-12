const env = getEnv();
export { env };

function getEnv() {
  // use process.env, process.argv
  return {
    PORT: 80,

    NODE_ENV: 'development',

    DISCOVERY_CLIENT_ROUTE: '/discovery/client',
    A_JSON_ROUTE: '/api/json',
    ReviewRestaurant_MANAGEMENT: '/reviewRestaurant',

    MONGO_URL: 'mongodb://127.0.0.1:27017',
    DB_NAME: 'a-json-db',
  };
}
