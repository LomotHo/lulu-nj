const action = require("../dao");

module.exports = {
  'GET /comments': async (ctx, next) => {
    let comments = await action.comments.getAll();
    ctx.render('comments.njk', {
      "ui": {
        title: "留言板",
        comments: comments
      }
    });
  }
};
