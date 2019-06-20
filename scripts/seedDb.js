const { User } = require('../models/models')
const { Place } = require('../models/models')
const { Review } = require('../models/models')

const main = async () => {
    try {
        const user1 = await User.create({
            name: "Fady",
            email: "fady@fakemail.com",
            password: "helloworld"
        })

        const user2 = await User.create({
            name: "Linda",
            email: "linda@fakemail.com",
            password: "helloworld"
        })

        const user3 = await User.create({
            name: "Shaban",
            email: "shaban@fakemail.com",
            password: "helloworld"
        })

        const user4 = await User.create({
            name: "Dan",
            email: "dan@fakemail.com",
            password: "dantheman"
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
        const review4 = await Review.create({
            title: "Medicore Pizza",
            date: "2018-11-12",
            rating: 6,
            entry: "Don't see what all the hype is about"


        })
        const review5 = await Review.create({
            title: "tasteless food",
            date: "2019-1-14",
            rating: 0,
            entry: "the worst Korean food I ever tried no flavor nothing."


        })
        const review6 = await Review.create({
            title: "Uncooked Chicken",
            date: "2018-1-19",
            rating: 1,
            entry: "Uncooked chicken I woke up the next day with food poison"
        })
        const review7 = await Review.create({
            title: "Decent Cheap Pizza",
            date: "2018-2-10",
            rating: 8,
            entry: "The pizza was good worth the money"


        })
        const review8 = await Review.create({
            title: "The best food I ever had",
            date: "2018-9-14",
            rating: 10,
            entry: "My first time trying Korean food and it tastes soo good"


        })
        const review9 = await Review.create({
            title: "moneys worth halal",
            date: "2018-7-19",
            rating: 7,
            entry: "The food was good the guy serving my food was rude"
        })
        const review10 = await Review.create({
            title: "Not the best pizza",
            date: "2018-6-10",
            rating: 4,
            entry: "Pizza tasted like it was microwaved"


        })
        const review11 = await Review.create({
            title: "Amazing food",
            date: "2018-3-20",
            rating: 9,
            entry: "the service and food was so good I loved the dumplings"


        })
        const review12 = await Review.create({
            title: "Best halal cart hands down",
            date: "2018-7-10",
            rating: 10,
            entry: "for $5 you get so much food and so good"
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
        const place4 = await Place.create({
            name: "Tandori Hut",
            category: "food",
            address: "234 52 ST AVE New York, New York",
            phone: "646-876-0965",
            description: "Makes you feel like you are in India"
        })

        await review1.setUser(user1)
        await review2.setUser(user2)
        await review3.setUser(user3)
        await review4.setUser(user4)
        await review5.setUser(user4)
        await review6.setUser(user3)
        await review7.setUser(user2)
        await review8.setUser(user1)
        await review9.setUser(user3)
        await review10.setUser(user4)
        await review11.setUser(user1)
        await review12.setUser(user2)

        await review1.setPlace(place1)
        await review2.setPlace(place2)
        await review3.setPlace(place3)
        await review4.setPlace(place4)
        await review5.setPlace(place3)
        await review6.setPlace(place4)
        await review7.setPlace(place1)
        await review8.setPlace(place2)
        await review9.setPlace(place1)
        await review10.setPlace(place2)
        await review11.setPlace(place3)
        await review12.setPlace(place4)

        await user1.addPlace(place1)
        await user1.addPlace(place2)
        await user1.addPlace(place2)
        await user2.addPlace(place2)
        await user2.addPlace(place1)
        await user2.addPlace(place1)
        await user3.addPlace(place3)
        await user3.addPlace(place4)
        await user3.addPlace(place4)
        await user4.addPlace(place4)
        await user4.addPlace(place3)
        await user4.addPlace(place3)


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