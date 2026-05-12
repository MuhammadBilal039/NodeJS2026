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

  let myQueryData = { ...req.query };

  delete myQueryData.limit;
  delete myQueryData.page;
  delete myQueryData.sort;

  let limit = req.query.limit || 10;
  let page = req.query.currentPage - 1;
  let sort = req.query.sort || "";

  let users = [];

  if (myQueryData.search) {
    // get users from DB
    users = await Users.find({
      userName: myQueryData.search,
    })
      .limit(limit)
      .skip(page * limit)
      .sort(sort);
  } else {
    // get users from DB
    users = await Users.find()
      .limit(limit)
      .skip(page * limit)
      .sort(sort);
  }

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
