const bcrypt = require('bcrypt');


const hashPassword = async (password) => {
    const saltRounds = 10; //saltRounds = 10 demek, bcrypt algoritmasının 2¹⁰ = 1024 kez hash işlemi yapacağı anlamına gelir
    return await bcrypt.hash(password,saltRounds);
}

const comparePassword = async (password,hashedPassword) => {
    return await bcrypt.compare(password,hashPassword);

};

module.exports = {
    hashPassword,
    comparePassword
}