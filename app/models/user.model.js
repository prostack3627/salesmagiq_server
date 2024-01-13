module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
        },
        pwd: {
            type: Sequelize.STRING,
        },
    });
    return User;
};
