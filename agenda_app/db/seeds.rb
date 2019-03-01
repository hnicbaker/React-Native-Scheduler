# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'Example User', password: 'examplePassword');

Appointment.create(name: 'Hair Appointment', time: '2pm', date: '2019-03-06', description: 'Hair Cut & Color with Stacy', calendar: 'Personal' )
Appointment.create(name: 'Morning Stand-Up', time: '10am', date: '2016-03-10', description: 'Status Update Meeting', calendar: 'Work' )
Appointment.create(name: 'Dentist Appointment', time: '12pm', date: '2016-03-15', description: 'Filling', calendar: 'Personal' )
Appointment.create(name: 'Date', time: '8pm', date: '2016-03-20', description: 'Drinks with Bob', calendar: 'Personal' )
Appointment.create(name: 'Meeting', time: '9am', date: '2016-03-20', description: 'Salary Negotiation', calendar: 'Work' )
