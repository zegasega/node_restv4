const Joi = require("joi");


const postScheme = Joi.object({
    title: Joi.string().min(3),
    description : Joi.string().min(3)
})