const env = getEnv();
export {env};

function getEnv() {
	// use process.env, process.argv
	return {
		PORT: 80,

		NODE_ENV: "development",

		OFFER_MANAGEMENT: "/offer",

		MONGO_URL: "mongodb://127.0.0.1:27017/restaurant",
		OFFER_DB: "offerDB"
	};
}
