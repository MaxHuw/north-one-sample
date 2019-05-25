module.exports = {

  user: async (parent, args, {db, req, res}, info) => {

    let results =  await db.User.findOne({
      where: {id: args.id}
    })
  
    return results;
  },

  userTasks: async (parent, args, {db, req, res}, info) => {

    let results =  await db.Task.findAll({
      where: {userId: args.userId},
      include: [{model: db.Subtask, as: 'subtask'}]
    })
  
    return results;
  }
}

// let results =  await db.User.findAll({
//   where: {id: args.id},
//   include: [{model: db.Task}],
// })