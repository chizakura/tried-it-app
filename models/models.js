const Sequelize = require("sequelize")

const db = new Sequelize({
    database: "tried_it_db",
    dialect: "postgres"
})

const Users = db.define('users',{
    name: Sequelize.STRING,
    userId: Sequelize.INTEGER

})

const Reviews = db.define('reviews',{
    title: Sequelize.STRING,
    date: Sequelize.INTEGER,
    rating: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    placeId: Sequelize.INTEGER,
    reviewId: Sequelize.INTEGER,
    entry: Sequelize.TEXT
   


})

const Places = db.define('places',{
    name: Sequelize.STRING,
    type: Sequelize.STRING,
    placeId: Sequelize.INTEGER,
    address: Sequelize.TEXT,


})

module.exports={
    db,
    Users,
    Reviews,
    Places
}