const action = require("../dao");

module.exports = {
  'GET /about': async (ctx, next) => {
    ctx.render('about.njk', {
      "ui": {
        title: "about",
      },
    });
  },

}