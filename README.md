# BE

# Register/Login
/api/auth

### POST Register
/register
Required: {
  username:
  password:
  role_id: (1 = instructor, 2 = client)
}

### POST Login
/login
Required: {
  username:
  password:
}


### GET users
/api/users


# Classes
/api/classes
### GET classes
/

### GET class by id
/:id

### POST create a new class
/  
EXAMPLE ->  
 Required: {  
  "name": "lift",  
	"type": "weights",  
	"class_date": "2/8/20",  
	"start_time": "5:00 PM",  
	"duration": 1,  
	"intensity": "high",  
	"location": "weight-room-02",  
	"number_of_attendees": 23,  
	"max_attendees": 30  
}

### PUT edit class info
/:id
Required: = same as for posting a new class

### DELETE class
/:id
