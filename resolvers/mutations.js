module.exports = {

  registerUser: async (parent, args, { db }, info) => {
    await db.User.create({
      firstName: args.firstName,
      lastName: args.lastName,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: args.email,
      password: args.password,
    }).then( () => {
      console.log("New User Created.")
    }).catch(console.log)

    return true
  },

  
  addTask: async (parent, args, { db }, info) => {
    await db.Task.create({
      title: args.title,
      description: args.description,
      status: args.status,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate: args.dueDate,
      userId: args.userId,
      categoryId: args.categoryId
    }).then( () => {
      console.log("New Task Created.")
    }).catch(console.log)

    return true
  },

  addSubtask: async (parent, args, { db }, info) => {
    await db.Subtask.create({
      title: args.title,
      description: args.description,
      status: args.status,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate: args.dueDate,
      taskId: args.taskId,
    }).then( () => {
      console.log("New Task Created.")
    }).catch(console.log)

    return true
  },

  deleteTask: async (parent, args, { db }, info) => {
    await db.Task.destroy({
      where: {id: args.id}
    })

    return true
  },

  deleteSubtask: async (parent, args, { db }, info) => {
    await db.Subtask.destroy({
      where: {id: args.id}
    })

    return true
  },

  editTask: async (parent, args, { db }, info) => {
    await db.Task.update({
      title: args.title,
      description: args.description,
      status: args.status,
      updatedAt: new Date(),
      dueDate: args.dueDate,
      categoryId: args.categoryId
    },{
      where: {id: args.id}
      }
    )

    return true
  },

  editSubtask: async (parent, args, { db }, info) => {
    await db.Subtask.update({
      title: args.title,
      description: args.description,
      status: args.status,
      updatedAt: new Date(),
      dueDate: args.dueDate,
    },{
      where: {id: args.id}
      }
    )

    return true
  },
};