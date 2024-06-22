Users
Create a New User
POST /users
Creates a new user with provided username, email, and password.
Example Request Body:
json
Copy code
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
Example Response (201 Created):
json
Copy code
{
  "id": 1,
  "username": "john_doe",
  "email": "john.doe@example.com"
}
Login
POST /login
Authenticates a user based on username/email and password.
Example Request Body:
json
Copy code
{
  "username": "john_doe",
  "password": "securepassword"
}
Example Response (200 OK):
json
Copy code
{
  "token": "your_jwt_token"
}
Teams
List All Teams
GET /teams
Retrieves a list of all teams for the logged-in user.
Example Response (200 OK):
json
Copy code
[
  {
    "id": 1,
    "name": "Development Team"
  },
  {
    "id": 2,
    "name": "Marketing Team"
  }
]
Create a New Team
POST /teams
Creates a new team.
Example Request Body:
json
Copy code
{
  "name": "Design Team"
}
Example Response (201 Created):
json
Copy code
{
  "id": 3,
  "name": "Design Team"
}
Get Team Details
GET /teams/{id}
Retrieves details of a specific team by ID.
Example Response (200 OK):
json
Copy code
{
  "id": 1,
  "name": "Development Team",
  "createdAt": "2024-06-22T12:00:00Z",
  "updatedAt": "2024-06-22T12:00:00Z"
}
Update Team Details
PUT /teams/{id}
Updates details of a specific team by ID.
Example Request Body:
json
Copy code
{
  "name": "Updated Development Team"
}
Example Response (200 OK):
json
Copy code
{
  "id": 1,
  "name": "Updated Development Team",
  "createdAt": "2024-06-22T12:00:00Z",
  "updatedAt": "2024-06-22T12:05:00Z"
}
Delete a Team
DELETE /teams/{id}
Deletes a specific team by ID.
Example Response (204 No Content)
Team Members
List Team Members
GET /teams/{id}/users
Retrieves a list of all members of a specific team by ID.
Example Response (200 OK):
json
Copy code
[
  {
    "userId": 1,
    "username": "john_doe",
    "role": "member"
  },
  {
    "userId": 2,
    "username": "jane_smith",
    "role": "admin"
  }
]
Add User to Team
POST /teams/{id}/users
Adds a user to a specific team with a role assignment.
Example Request Body:
json
Copy code
{
  "userId": 3,
  "role": "member"
}
Example Response (201 Created):
json
Copy code
{
  "userId": 3,
  "username": "alice_green",
  "role": "member"
}
Tasks
List All Tasks
GET /tasks
Retrieves a list of all tasks for the logged-in user.
Example Response (200 OK):
json
Copy code
[
  {
    "id": 1,
    "title": "Implement login endpoint",
    "description": "Create API endpoint for user login functionality.",
    "status": "in_progress",
    "priority": "high",
    "userId": 1,
    "teamId": null,
    "createdAt": "2024-06-22T12:00:00Z",
    "updatedAt": "2024-06-22T12:00:00Z"
  },
  {
    "id": 2,
    "title": "Design dashboard UI",
    "description": "Create UI design for project dashboard.",
    "status": "todo",
    "priority": "medium",
    "userId": 1,
    "teamId": 1,
    "createdAt": "2024-06-22T12:00:00Z",
    "updatedAt": "2024-06-22T12:00:00Z"
  }
]
Create a New Task
POST /tasks
Creates a new task with an assignee.
Example Request Body:
json
Copy code
{
  "title": "Implement registration endpoint",
  "description": "Create API endpoint for user registration functionality.",
  "status": "todo",
  "priority": "high",
  "assigneeId": 2,  // User ID who will be assigned the task
  "teamId": 1        // Optional: Team ID if task is assigned to a team
}
Example Response (201 Created):
json
Copy code
{
  "id": 3,
  "title": "Implement registration endpoint",
  "description": "Create API endpoint for user registration functionality.",
  "status": "todo",
  "priority": "high",
  "userId": 1,
  "teamId": 1,
  "createdAt": "2024-06-22T12:00:00Z",
  "updatedAt": "2024-06-22T12:00:00Z"
}
Get Task Details
GET /tasks/{id}
Retrieves details of a specific task by ID.
Example Response (200 OK):
json
Copy code
{
  "id": 1,
  "title": "Implement login endpoint",
  "description": "Create API endpoint for user login functionality.",
  "status": "in_progress",
  "priority": "high",
  "userId": 1,
  "teamId": null,
  "createdAt": "2024-06-22T12:00:00Z",
  "updatedAt": "2024-06-22T12:00:00Z"
}
Update Task Details
PUT /tasks/{id}
Updates details of a specific task by ID, including status and priority.
Example Request Body:
json
Copy code
{
  "status": "completed",
  "priority": "low"
}
Example Response (200 OK):
json
Copy code
{
  "id": 1,
  "title": "Implement login endpoint",
  "description": "Create API endpoint for user login functionality.",
  "status": "completed",
  "priority": "low",
  "userId": 1,
  "teamId": null,
  "createdAt": "2024-06-22T12:00:00Z",
  "updatedAt": "2024-06-22T12:05:00Z"
}
Delete a Task
DELETE /tasks/{id}
Deletes a specific task by ID.
Example Response (204 No Content)
