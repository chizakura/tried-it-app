const Sequelize = require("sequelize")
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 12;

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
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS);
    
    user.password = hashedPassword;
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