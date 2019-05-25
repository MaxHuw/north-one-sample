module.exports = {

  user: async (parent, args, {db, req, res}, info) => {
    console.log(args)

    let results =  await db.User.findOne({
      where: {id: args.id}
    })

    console.log("User results: ", results)
  
    return results;
  },

  userTasks: async (parent, args, {db, req, res}, info) => {
    console.log(args)

    let results =  await db.Task.findAll({
      where: {userId: args.userId},
      include: [{model: db.Subtask, as: 'subtask'}]
    })

    console.log("User Tasks results: ", results)
  
    return results;
  }
}

// let results =  await db.User.findAll({
//   where: {id: args.id},
//   include: [{model: db.Task}],
// })