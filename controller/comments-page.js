const action = require("../dao");

module.exports = {
  'GET /comments': async (ctx, next) => {
    ctx.render('comments.njk', {
      "ui": {
        title: "留言板",
      }
    });
  }
};
