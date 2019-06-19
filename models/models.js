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
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    // password: {
    //     type: Sequelize.TEXT,
    //     allowNull: false
    // }
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
        type: Sequelize.TEXT,
        allowNull: false
    }
    // likes: {
    //     type: Sequelize.INTEGER
    // }
    // comments: {
    //     type: Sequelize.TEXT
    // }
})

const Place = db.define('place', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT
    },
    description: {
        type:Sequelize.TEXT,
        allowNull:false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false 
    }
    // favorite: {
    //     type: Sequelize.INTEGER
    // }
    // image: {
    //     type: Sequelize.TEXT
    // }
})

User.hasMany(Review)
Place.hasMany(Review)
Review.belongsTo(Place)
Review.belongsTo(User)


module.exports = {
    db,
    User,
    Review,
    Place
}