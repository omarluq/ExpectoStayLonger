# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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
    title: 'The Malfoy Manor',
    description: 'A Handsome manor house surrounded by elaborate gardens, including a fountain. The front door swings inward at 
    the approach of a person he hallway is large, dimly lit, and sumptuously decorated, with a magnificent carpet covering the 
    stone floor. The walls of the entrance hall display pale-faced portraits lining the walls, and at the end of the hall is the 
    bronze-handled door to the drawing room',
    host_id: 1,
    street_address: 'Doe Lea',
    city: 'Chesterfield',
    country: 'United Kingdom',
    postcode:  "S44 5QJ",
    price: 250,
    num_of_beds: 20,
    house_elf: true,
    owl_friendly: true,
    longitude: 1.3129,
    latitude: 53.1921
)

file1 = open("app/assets/images/malfoymanor1.jpg")
listing1.photos.attach(io: file1, filename: 'malfoymanor1.jpg')

file11 = open("app/assets/images/malfoymanor2.jpg")
listing1.photos.attach(io: file11, filename: 'malfoymanor2.jpg')

listing2 = Listing.create!(
    title: '4 privet drive cupboard under stairs',
    description: 'Small and dusty, with lots of spiders.',
    host_id: 2,
    street_address: '12 Picket Post Close',
    city: 'Bracknell',
    country: 'UL',
    postcode: "RG12 9FG",
    price: 15,
    num_of_beds: 1,
    house_elf: true,
    owl_friendly: true,
    longitude: -0.753980,
    latitude: 51.416039
)

file2 = open("app/assets/images/cupboard.jpg")
listing2.photos.attach(io: file2, filename: 'cupboard.jpg')



listing3 = Listing.create!(
    title: '12 Grimmauld Place',
    description: 'Gloomy and cobwebby, with the wallpaper peeling off and the carpet worn thin.',
    host_id: 3,
    street_address: '23 Claremont Square',
    city: 'London',
    country: 'United Kingdom',
    postcode: "N1 9LX",
    price: 100,
    num_of_beds: 12,
    house_elf: true,
    owl_friendly: true,
    longitude: -0.110220,
    latitude: 51.530689
)

file3 = open("app/assets/images/number12.jpg")
listing3.photos.attach(io: file3, filename: 'number12.jpg')
