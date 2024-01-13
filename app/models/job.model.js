module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    company: {
      type: Sequelize.STRING,
    },
    manager: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    zip: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    salary: {
      type: Sequelize.STRING,
    },
  });
  return Job;
};
