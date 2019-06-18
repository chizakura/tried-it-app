const { User } = require('../models/models')
const { Place } = require('../models/models')
const { Review } = require('../models/models')

const main = async () => {
    try {
        const user1 = await User.create({
            name: "Fady",
            email: "fady@fakemail.com"
        })

        const user2 = await User.create({
            name: "Linda",
            email: "linda@fakemail.com"
        })

        const user3 = await User.create({
            name: "Shaban",
            email: "shaban@fakemail.com"
        })

        const review1 = await Review.create({
            title: "Best pizza ever",
            date: "2018-10-10",
            rating: 10,
            entry: "The pizza was so good the cheese melted in my mouth"


        })
        const review2 = await Review.create({
            title: "Taste of Korea",
            date: "2018-10-14",
            rating: 9,
            entry: "Nice dumpling spot in the heart of KoreaTown"


        })
        const review3 = await Review.create({
            title: "Halal Carts",
            date: "2018-10-19",
            rating: 7,
            entry: "By far the best halal cart in midtown Manhattan chicken is fresh"


        })
        const place1 = await Place.create({
            name: "Luigis Pizza",
            category: "food",
            address: "123 Main ST New York, New York",
            phone: "718-987-9807",
            description: "small pizza shop on the corner of Main ST"


        })
        const place2 = await Place.create({
            name: "Abiko Curry",
            category: "food",
            address: "345 5th AVE New York, New York",
            phone: "212-997-9807",
            description: "delicious Japanese-Korean style curry"
        })
        const place3 = await Place.create({
            name: "Rafiqs Halal",
            category: "food",
            address: "122 42 ST AVE New York, New York",
            phone: "646-909-9807",
            description: "rainbow colored cart you can't miss it !!"
        })

        await review1.setUser(user1)
        await review2.setUser(user2)
        await review3.setUser(user3)
        await review1.setPlace(place1)
        await review2.setPlace(place2)
        await review3.setPlace(place3)

    }
    catch{
        (err => {
            res.status(500).json(err)
        })
    } finally {
        process.exit();
    }

}
main()