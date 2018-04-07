var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
    console.log("Number of entries: ", friends.length);
  });

  app.post("/api/friends", function (req, res) {

    var bff = {
      name: "ahmad",
      pic: "ahmad",
      friendDifference: 1000
    };

    console.log(req.body);

    var userProfile = req.body;
    var usersScores = userProfile.surveyResults;
    var totalDiff = 0;

    for (var i = 0; i < friends.length; i++) {
      totalDiff = 0;

      for (var j = 0; j < usersScores.length; j++) {

        totalDiff += Math.abs(parseInt(usersScores[j]) 
        - parseInt(friends[i].scores[j]));

        if (totalDiff <= bff.friendDifference) {
          bff.name = friends[i].name;
          bff.pic = friends[i].pic;
          bff.friendDifference = totalDiff;
        }
      }
    }

    friends.push(userProfile);

    res.json(bff);

  });
}
