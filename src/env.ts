const env = getEnv();
export { env };

function getEnv() {
  // use process.env, process.argv
  return {
    PORT: 80,
    NODE_ENV: "development",
    MONGO_URL: "mongodb://127.0.0.1:27017/restaurant",
    OFFER_DB: "offerDB",
    CATEGORY_MANAGEMENT: "/category",
    USER_MANAGEMENT: "/user",
    Ingredients_MANAGEMENT: "/ingredients",
    PHOTO_ROUTE: "/photo",
    PRODUCT_MANAGEMENT: "/product",
    PRODUCT_REVIEW: "/product_review",

    ReviewRestaurant_MANAGEMENT: "/reviewRestaurant",
    DB_NAME: "restaurantDB",
    USER_DB: "userDB",
    PRODUCT_DB: "productDB",
    OFFER_MANAGEMENT: "/offer",
    reviewRestaurantDB: "reviewRestaurantDB",
    ingredientsDB: "ingredientsDB",
    TABLE_ROUTE: "/",
    rezervation_MANAGEMENT: "/rezervation",
    rezervationDB: "rezervationDB",
    MAIN_ENDPOINT: "/",
  };
}
