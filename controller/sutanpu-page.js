const action = require("../dao");
// sutanpu =

module.exports = {
  'GET /sutanpu': async (ctx, next) => {
    let sutanpu = await action.sutanpu.getAll();
    ctx.render('sutanpu.njk', {
      "ui": {
        title: "lulu的表情包",
        sutanpu: sutanpu
      }
    });
  }
};
