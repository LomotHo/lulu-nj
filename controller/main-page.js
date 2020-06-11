const action = require("../dao");


module.exports = {
    'GET /main': async (ctx, next) => {

        ctx.render('main.njk', {
            "ui": {
                title: "lulu fans -- main page",
                env: process.env.NODE_ENV
            },
        });
    },

};

