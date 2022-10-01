module.exports.response = (res, code, data = null, message = '', error = null, cookies) => {
    if (cookies) for (let cookie of Object.keys(cookies)) {
        res.cookie(cookie, cookies[cookie])
    }
    res.status(code).send({
        data, message, error
    });
}