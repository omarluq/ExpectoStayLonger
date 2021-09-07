# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(
    name: 'richard',
    email: "richard@gmail.com",
    bio: "hey im richard",
    password: 123456
)


user2 = User.create!(
    name: 'richard',
    email: "richard2@gmail.com",
    bio: "hey im richard 2",
    password: 123456
)


user3 = User.create!(
    name: 'richard',
    email: "richard3@gmail.com",
    bio: "hey im richard 3",
    password: 123456
)


listing1 = Listing.create!(
    title: 'title',
    description: 'bla',
    host_id: 1,
    street_address: 'asmasx',
    city: ' alskmdalkmsx',
    country: 'aksmxkam',
    postcode: 12345,
    price: 10,
    num_of_beds: 3,
    house_elf: true,
    owl_friendly: true
)


listing2 = Listing.create!(
    title: 'title',
    description: 'bla',
    host_id: 2,
    street_address: 'asmasx',
    city: ' alskmdalkmsx',
    country: 'aksmxkam',
    postcode: 12345,
    price: 10,
    num_of_beds: 3,
    house_elf: true,
    owl_friendly: true
)



listing3 = Listing.create!(
    title: 'title',
    description: 'bla',
    host_id: 3,
    street_address: 'asmasx',
    city: ' alskmdalkmsx',
    country: 'aksmxkam',
    postcode: 12345,
    price: 10,
    num_of_beds: 3,
    house_elf: true,
    owl_friendly: true
)