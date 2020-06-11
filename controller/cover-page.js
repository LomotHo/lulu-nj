const action = require("../dao");

module.exports = {
  'GET /': async (ctx, next) => {
    ctx.render('cover.njk', {
      "ui": {
        title: "雫るる大好き",
      },
    });
  },

}