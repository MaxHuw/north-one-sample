module.exports = {
  
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
  }
};