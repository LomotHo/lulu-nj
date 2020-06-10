const action = require("../dao");

module.exports = {
  'GET /test': async (ctx, next) => {
    ctx.render('test.njk', {
      "ui": {
        title: "测试页面",
      }
    });
  }
};
