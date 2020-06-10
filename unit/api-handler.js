const unirest = require("unirest");

module.exports = (url, addUrl) => {
    return new Promise(function (resolve, reject ) {
        unirest.get(url)
        .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        .end(function (response) {
            if (response.error) {
                reject(response.error);
            } else {
                addUrl(resolve, response.body.data);
            }
        });
    });
}
