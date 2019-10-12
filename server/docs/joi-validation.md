# Use only "@hapi/joi": "^15.0.3",

Having issue in JOI version 16.0 // Oct 2019

const inputValidationSchema = Joi.object().keys({
existingUrl: Joi.string().required(),
newUrl: Joi.string().required(),
videoId: Joi.number().integer(),
referenceId: Joi.string(),
createdAt: Joi.date(),
shortDescription: Joi.string(),
programName: Joi.string().required(),
});

    const validationResult = Joi.validate(valueObject, inputValidationSchema);
