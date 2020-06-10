const action = require("../dao");

module.exports = {
  'GET /momo': async (ctx, next) => {
    ctx.render('momo.njk', {
      "ui": {
        title: "大型吃桃现场",
      }
    });
  }
};
