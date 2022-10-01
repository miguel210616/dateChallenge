'use strict'
const {response} = require('../shared/response');
const {schema} = require('../shared/validate');
const {sortDate, Suma} = require('../service/serviceSaldo');

module.exports = function (app, opts) {
    // Setup routes, middleware, and handlers
    app.post('/sortingDates', function (req, res, next) {
        try {
            const value = schema.validate(req.body)
            console.log(value);
            if(value.error){
                response(res, 403, {}, value.error.details, "Bad request");
            }
            const forma = req.body.forma;
            const data = sortDate(forma);
            response(res, 200, data, "Ordenamiento exitoso");
        } catch (error) {
            response(res, 403, {}, `Error e el ordenamiento`, error.message);
        }
    })

    app.get('/totalAmount', function (req, res, next) {
        try {
            const data = Suma()
            response(res, 200, data, "Suma de saldos");
        } catch (error) {
            response(res, 403, {}, `Error al sumar`, error.message);
        }
    })
}
