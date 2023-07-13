const env = getEnv();
export { env };

function getEnv() {
  return {
    PORT: 80,

    NODE_ENV: "development",

    DISCOVERY_CLIENT_ROUTE: "/discovery/client",
    USER_ROUTE: "/api/user",
    USER_MANAGEMENT: "/user",
    PHOTO_ROUTE: "/photo",
    PRODUCT_REVIEW: "/product_review",

    MONGO_URL: "mongodb://127.0.0.1:27017",
    DB_NAME: "restaurantDB",
    MAIN_ENDPOINT: "/",
  };
}
