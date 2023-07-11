const env = getEnv();
export {env};

function getEnv() {
	// use process.env, process.argv
	return {
    PORT: 80,
    NODE_ENV: "development",

    DISCOVERY_CLIENT_ROUTE: "/discovery/client",
    A_JSON_ROUTE: "/api/json",
    GET_ROUTE: "/getCategory",
    POST_ROUTE: "/addCategory",
    DELETE_ROUTE: "/deleteCategory",
    MONGO_URL: "mongodb://127.0.0.1:27017",
    DB_NAME: "categoryDB",

    CATEGORY_MANAGEMENT: "category",
  };
}
