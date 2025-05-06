const Joi = require('joi');

const userCreate = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});

const userUpdate = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});

module.exports = { 
  userCreate,
  userUpdate
};

// her crud islemi icin yeni bir validation yaziyor mesela update user yaparken farki validation yapabilirmiyiz
// bir model icin (user) tek bir validation yazilip kullanilabilirmi

// model kismindada fieldlara kural koyduk, joi validator ile de koyuyoruz ikiside gereklimi