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
    ORDER_ROUTE: "/order",

    MONGO_URL: "mongodb://127.0.0.1:27017/restaurant",
    PHOTO_DB:"photoDB",
    USER_DB:"userDB",
    ORDER_DB:"orderDB",
    TABLE_DB:"tableDB",
    TABLE_ROUTE: "/table",
  };
}
