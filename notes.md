# PITCH

> These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.




# MVP
<!-- ✔ -->
1. User can create/register as a "Client" and login with the registered credentials.(web, mobile)
<!-- ✔ -->
2. User can create/register as an "Instructor" by entering an additional Auth Code during signup, and can login with the registered credentials.(web, mobile)
<!-- ✔ -->
3. "Client" and "Instructor" are both presented with the appropriate onboarding walkthrough on first signin, with an option to skip it.(UX, mobile)
<!-- ✔ BUT minor issues with post message and edit not working -->
4. Authenticated "Instructor" can create update and delete a "Class". At a minimum, each "class" must have the following properties(web, mobile):
	* Name
	* Type
	* Start time
	* Duration
	* "Intensity" level
	* Location
	* Current number of registered attendees
	* Max class size
<!-- maybe instructors can add punch passes to their profile? -->
5. Authenticated "Instructor" can create "virtual" punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, HIGH, pilates, etc.)(mobile)
<!-- can get full list of classes, use 'getBy' for specific searches -->
6. Authenticated "Client" can search for avaialble classes. At a minimum, they must be able to search by the following criteria(web, mobile):
	* class time
	* class date
	* class duration
	* class type
	* "Intensity level"
	* class location

7. Authenticated user can reserve a spot in a class with available seats open, and can reschedule or cancel their current reservation from the mobile app(mobile).




## Instructors
- take attendance
- request/process payments
- create virtual "punch passes" for each class offered
- alert clients on cancellations

## Clients
- can see information about classes
    - location
    - class size
    - start time
    - duration
- can reschedule/cancel appointment
- can make a reservation




## dependencies
- yarn
- express
- nodemon
- knex
- sqlite3
- helmet
- cors
- bcryptjs
- jsonwebtoken
- supertest
- jest


## reference projects
- sprint-challenge-authentication
- node-db4-challenge