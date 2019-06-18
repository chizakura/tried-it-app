const { User } = require('../models/models')
const { Place } = require('../models/models')
const { Review } = require('../models/models')

const main = async () => {
    try {
        const user1 = await User.create({
            name: "Fady"
        })

        const user2 = await User.create({
            name: "Linda"
        })

        const user3 = await User.create({
            name: "Shaban"
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
            categroy: "food",
            address: "123 Main ST New York, New York"


        })
        const place2 = await Place.create({
            name: "Korean Food",
            categroy: "food",
            address: "345 5th AVE New York, New York"
        })
        const place3 = await Place.create({
            name: "Rafiqs Halal",
            categroy: "food",
            address: "122 42 ST AVE New York, New York"
        })

        await user1.setReview(review1)
        await user2.setReview(review2)
        await user3.setReview(review3)
        await place1.setReview(review1)
        await place2.setReview(review2)
        await place3.setReview(review3)
    }
    catch{ 
        (err => {
        res.status(500).json(err)
    })
}

}
main()