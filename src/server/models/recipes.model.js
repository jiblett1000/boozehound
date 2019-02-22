// recipes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const recipes = new Schema({
    name: { type: String, required: true },
    image: String,
    ingredients: Array,
    prepMethods: Array,
    drinkware: String,
    serveMethod: String,
    garnishes: Array,
    notes: String,
    credit: String,
    cogs: Number,
    initialVolume: Number,
    initialAbv: Number,
    dilution: Number,
    finalVolume: Number,
    finalAbv: Number,
    glassFilled: Number,
  }, {
    timestamps: true,
  });

  return mongooseClient.model('recipes', recipes);
};
