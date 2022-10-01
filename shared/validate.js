const Joi = require('joi');

const schema = Joi.object({
    forma:Joi.string().valid('asc','des').required()
})

module.exports.schema = schema;