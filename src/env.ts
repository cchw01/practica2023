const env = getEnv();
export { env };

function getEnv() {
	// use process.env, process.argv
	return {
		PORT: 80,

		NODE_ENV: "development",

		MAIN_ENDPOINT: "/",

		MONGO_URL: "mongodb://127.0.0.1:27017",
		DB_NAME: "restaurantDB"
	};
}
