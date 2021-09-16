# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.delete_all
User.delete_all

require 'open-uri'

user1 = User.create!(
    name: 'Dobby',
    email: "dobbythehouseelef@gmail.com",
    bio: "Dobby has no master! dobby is free",
    password: 123456
)


user2 = User.create!(
    name: 'Lucius Malfoy',
    email: "lucius.malfoy@gmail.com",
    bio: "Previous governor of Hogwarts school of witchcraft and wizardry.",
    password: 123456
)


user3 = User.create!(
    name: 'Albus Percival Wulfric Brian Dumbledore',
    email: "apwvd@gmail.com",
    bio: "Headmaster of Hogwarts school of witchcraft and wizardry.",
    password: 123456
)

user4 = User.create!(
    name: 'Harry Potter',
    email: "harrypotter@gmail.com",
    bio: "I am the choosen one.",
    password: 123456
)


user5 = User.create!(
    name: 'Ron Weasley',
    email: "ron.weasley@gmail.com",
    bio: "Just another weasley.",
    password: 123456
)


user6 = User.create!(
    name: 'Bill Weasley',
    email: "bill.weasley@gmail.com",
    bio: "I'm the handsome weasley!, husband to Fleur Delacour,.",
    password: 123456
)





listing1 = Listing.create!(
    title: 'The Malfoy Manor',
    description: 'A Handsome manor house surrounded by elaborate gardens, including a fountain. The front door swings inward at 
    the approach of a person he hallway is large, dimly lit, and sumptuously decorated, with a magnificent carpet covering the 
    stone floor. The walls of the entrance hall display pale-faced portraits lining the walls, and at the end of the hall is the 
    bronze-handled door to the drawing room',
    host_id: user2.id,
    street_address: 'Doe Lea',
    city: 'Chesterfield',
    country: 'United Kingdom',
    postcode:  "S44 5QJ",
    price: 250,
    num_of_beds: 20,
    house_elf: true,
    owl_friendly: false,
    longitude: -1.3129,
    latitude: 53.1921
)

file01 = open("app/assets/images/malfoymanor0.webp")
listing1.photos.attach(io: file01, filename: 'malfoymanor0.webp')

file11 = open("app/assets/images/malfoymanor2.jpg")
listing1.photos.attach(io: file11, filename: 'malfoymanor2.jpg')

file1 = open("app/assets/images/malfoymanor1.jpg")
listing1.photos.attach(io: file1, filename: 'malfoymanor1.jpg')

file111 = open("app/assets/images/malfoymanor3.jpg")
listing1.photos.attach(io: file111, filename: 'malfoymanor3.jpg')

listing2 = Listing.create!(
    title: '4 privet drive cupboard under stairs',
    description: 'Small and dusty, with lots of spiders.',
    host_id: user4.id,
    street_address: '12 Picket Post Close',
    city: 'Bracknell',
    country: 'UL',
    postcode: "RG12 9FG",
    price: 15,
    num_of_beds: 1,
    house_elf: false,
    owl_friendly: false,
    longitude: -0.753980,
    latitude: 51.416039
)

file2 = open("app/assets/images/cupboard.jpg")
listing2.photos.attach(io: file2, filename: 'cupboard.jpg')

file22 = open("app/assets/images/cupboard2.jpg")
listing2.photos.attach(io: file22, filename: 'cupboard2.jpg')

file222 = open("app/assets/images/cupboard3.jpg")
listing2.photos.attach(io: file222, filename: 'cupboard3.jpg')

file2222 = open("app/assets/images/cupboard4.jpg")
listing2.photos.attach(io: file2222, filename: 'cupboard4.jpg')


listing3 = Listing.create!(
    title: '12 Grimmauld Place',
    description: 'Gloomy and cobwebby, with the wallpaper peeling off and the carpet worn thin.',
    host_id: user4.id,
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

file03 = open("app/assets/images/number120.png")
listing3.photos.attach(io: file03, filename: 'number120.jpg')

file3 = open("app/assets/images/number12.jpg")
listing3.photos.attach(io: file3, filename: 'number12.jpg')

file33 = open("app/assets/images/number121.jpg")
listing3.photos.attach(io: file33, filename: 'number121.jpg')

file333 = open("app/assets/images/number123.jpg")
listing3.photos.attach(io: file333, filename: 'number123.jpg')


listing4 = Listing.create!(
    title: 'The burrow',
    description: 'It had once been a large stone pigpen, but extra rooms had been added here and there until it became several stories high, crooked and held up by magic.',
    host_id: user5.id,
    street_address: 'Yelverton',
    city: 'Devon',
    country: 'United Kingdom',
    postcode: "N1 9LX",
    price: 100,
    num_of_beds: 6,
    house_elf: false,
    owl_friendly: true,
    longitude: -4.093703271149366,
    latitude: 50.485204974636076
)


file44 = open("app/assets/images/theburrow2.jpg")
listing4.photos.attach(io: file44, filename: 'theburrow2.jpg')

file4 = open("app/assets/images/theburrow.jpg")
listing4.photos.attach(io: file4, filename: 'theburrow.jpg')

file444 = open("app/assets/images/theburrow3.jpg")
listing4.photos.attach(io: file444, filename: 'theburrow3.jpg')

file4444 = open("app/assets/images/theburrow4.jpg")
listing4.photos.attach(io: file4444, filename: 'theburrow4.jpg')






listing5 = Listing.create!(
    title: 'The shrieking shack',
    description: 'The most haunted in the united kingdom! Great for werewolf, you are always welcome here when its a full moon.',
    host_id: user3.id,
    street_address: 'Castle Rd',
    city: 'Dufftown',
    country: 'United Kingdom',
    postcode: "AB55 4GH",
    price: 35,
    num_of_beds: 3,
    house_elf: false,
    owl_friendly: false,
    longitude: -3.1238732288441042,
    latitude: 57.45294748182715
)

file5 = open("app/assets/images/ShriekingShack.jpg")
listing5.photos.attach(io: file5, filename: 'ShriekingShack.jpg')

file55 = open("app/assets/images/ShriekingShack2.jpg")
listing5.photos.attach(io: file55, filename: 'ShriekingShack2.jpg')

file555 = open("app/assets/images/ShriekingShack1.jpg")
listing5.photos.attach(io: file555, filename: 'ShriekingShack1.jpg')

file5555 = open("app/assets/images/ShriekingShack4.jpg")
listing5.photos.attach(io: file5555, filename: 'ShriekingShack4.jpg')




listing6 = Listing.create!(
    title: 'Shell Cottage',
    description: 'Lonely and beautiful tiny cottage standing alone on a cliff overlooking the sea embedded with shells and whitewashed.',
    host_id: user6.id,
    street_address: 'S W coast path',
    city: 'Helston',
    country: 'United Kingdom',
    postcode: "TR12 7NT",
    price: 60,
    num_of_beds: 3,
    house_elf: false,
    owl_friendly: true,
    longitude: -5.206211084664574,
    latitude: 49.958933721931174
)


file06 = open("app/assets/images/shellcottage0.png")
listing6.photos.attach(io: file06, filename: 'shellcottage0.jpg')

file6 = open("app/assets/images/shellcottage.jpg")
listing6.photos.attach(io: file6, filename: 'shellcottage.jpg')

file66 = open("app/assets/images/shellcottage2.jpg")
listing6.photos.attach(io: file66, filename: 'shellcottage2.jpg')


file6666 = open("app/assets/images/shellcottage4.jpg")
listing6.photos.attach(io: file6666, filename: 'shellcottage4.jpg')