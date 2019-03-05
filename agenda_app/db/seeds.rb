# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'Example User', password: 'examplePassword');

Appointment.create(name: 'Hair Appointment', time: '2pm', date: 'March 6th 2019', description: 'Hair Cut & Color with Stacy', calendar: 'Personal' )
Appointment.create(name: 'Morning Stand-Up', time: '10am', date: 'March 7th 2019', description: 'Status Update Meeting', calendar: 'Work' )
Appointment.create(name: 'Dentist Appointment', time: '12pm', date: 'March 8th 2019', description: 'Filling', calendar: 'Personal' )
Appointment.create(name: 'Date', time: '8pm', date: 'March 9th 2019', description: 'Drinks with Bob', calendar: 'Personal' )
Appointment.create(name: 'Meeting', time: '9am', date: 'March 8th 2019', description: 'Salary Negotiation', calendar: 'Work' )
