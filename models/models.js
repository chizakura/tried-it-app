const Sequelize = require("sequelize")

const db = new Sequelize({
    database: "tried_it_db",
    dialect: "postgres"
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
})

const Review = db.define('review', {
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
    
    entry: {
        type: Sequelize.TEXT
    },



})

const Place = db.define('place', {
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

User.hasMany(Review)
Review.belongTo(User)
Place.hasMany(Review)
Review.belongTo(Place)
module.exports = {
    db,
    User,
    Review,
    Place
}