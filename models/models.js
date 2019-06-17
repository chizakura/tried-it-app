const Sequelize = require("sequelize")

const db = new Sequelize({
    database: "tried_it_db",
    dialect: "postgres"
})

const Users = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
})

const Reviews = db.define('reviews', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    placeId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    reviewId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    entry: {
        type: Sequelize.TEXT
    },



})

const Places = db.define('places', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING
    },
    placeId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    address: {
        type: Sequelize.TEXT
    },


})

Users.hasMany(Reviews)
Reviews.belongTo(Users)
Places.hasMany(Reviews)
Reviews.belongTo(Places)
module.exports = {
    db,
    Users,
    Reviews,
    Places
}