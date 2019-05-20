var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        // console.log(friends)
        res.json(friends);

    });
    
    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        var userInfo = req.body;
        var userScores = userInfo.scores;

        console.log(userScores);

        var totalDifference = 0;

        for (i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userInfo);
        res.json(bestMatch)
    })
}