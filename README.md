# NorthOne TODO API

## Description

Basic API for a To Do app. Built using NodeJS, Express, Sequelize, PostgrSQL, Apollo GraphQL.

## ERD


## GraphQL Query and Mutation Examples

```
mutation {
  registerUser(firstName: "Hughes", lastName: "Graham", email: "test3@example.com", password: "test3")
}

query {
  user(id: 1){
    firstName
    lastName
  }
}

query{
  userTasks(userId: 1){
    id
    title
    description
    subtask {
      id
      taskId
      title
      description
      status
    }
  }
}

mutation {
  addTask(
    title: "Cook Dinner", 
    description: "Taco Tuesday.", 
    status: "In progress", 
    dueDate: "2019-05-25", 
    userId: 1,
  	categoryId: 1 
  )
}

mutation {
	addSubtask(
    title: "Buy Ground Beef", 
    description: "Taco Tuesday.", 
    status: "Not done.", 
    dueDate: "2019-05-25", 
    taskId: 2
	)
}

mutation {
  deleteTask(id: 1)
}

mutation{
  deleteSubtask(id:2)
}

mutation{
  editTask(
  	id: 2,
    title: "Cook Dinner", 
    description: "Roast Beef.", 
    status: "Cooking...", 
    dueDate: "2019-05-25", 
  	categoryId: 1 
  )
}

mutation{
	  editSubtask(
  	id: 3,
    title: "Buy Roast", 
    description: "New roast for change of dinne plans.", 
    status: "Shopping", 
    dueDate: "2019-05-25", 
  )
}
```
