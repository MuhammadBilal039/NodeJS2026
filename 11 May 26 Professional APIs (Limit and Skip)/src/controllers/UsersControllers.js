const Users = require("../models/UserSchema");

const getUsersControllers = async (req, res) => {
  console.log(req.query, "==>> query"); // userName , ageStart, ageEnd

  // let query = {};
  // if (req.query.ageStart && req.query.ageEnd) {
  //   const queryFlag = { ...req.query }; // userName , ageStart, ageEnd

  //   delete queryFlag.ageStart;
  //   delete queryFlag.ageEnd;

  //   query = {
  //     ...queryFlag,
  //     age: { $gte: req.query.ageStart, $lte: req.query.ageEnd },
  //   };
  // }

  // get users from DB
  const users = await Users.find().sort("-age").limit(2).skip(1);
  //   const users = await Users.find({
  //     userName: "Azan",
  //   });

  res.json({
    status: true,
    message: "All Users Fetched Successfully!",
    data: users,
  });
};

module.exports = getUsersControllers;
