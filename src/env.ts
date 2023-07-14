const env = getEnv();
export { env };

function getEnv() {
  return {
    PORT: 80,

    NODE_ENV: 'development',

    DISCOVERY_CLIENT_ROUTE: '/discovery/client',
    A_JSON_ROUTE: '/api/json',

    MONGO_URL: 'mongodb://127.0.0.1:27017',
    USER_ROUTE: '/api/user',
    USER_MANAGEMENT: '/user',
    Ingredients_MANAGEMENT: '/ingredients',
    PHOTO_ROUTE: '/photo',
    PRODUCT_MANAGEMENT: '/product',
    ReviewRestaurant_MANAGEMENT: '/reviewRestaurant',
    DB_NAME: 'restaurantDB',
    USER_DB: 'userDB',
    PRODUCT_DB:'productDB',
    reviewRestaurantDB: 'reviewRestaurantDB',
    ingredientsDB:'ingredientsDB',
    TABLE_ROUTE: "/",
  };
}
