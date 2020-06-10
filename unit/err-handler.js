module.exports = {
    ServerError: function (code, message) {
        this.code = code || 'server:unknown_error';
        this.message = message || '';
    },
    handler: () => {
        return async (ctx, next) => {
            try {
                await next();
            } catch (e) {
                // 返回错误:
                ctx.response.status = 400;
                ctx.response.type = 'application/json';
                ctx.response.body = {
                    code: e.code || 'server:unknown_error',
                    message: e.message || ''
                };
            }
        };
    }
};
