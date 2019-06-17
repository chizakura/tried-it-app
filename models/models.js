const Sequelize = require("sequelize")

const db = new Sequelize({
    database: "tried_it_db",
    dialect: "postgres",
    define: {underscored: true}
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
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
    }

})

const Place = db.define('place', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.TEXT
    }


})

User.hasMany(Review)
Review.belongTo(User)
Place.hasMany(Review)
Review.belongsTo(Place)

module.exports = {
    db,
    User,
    Review,
    Place
}