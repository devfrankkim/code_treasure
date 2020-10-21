var soccerPlayers = [
  {
    name: "Neymar",
    age: 281,
    hobby: "Soccer",
    skills: ["freekick", "dribble"],
  },
  {
    name: "Messi",
    age: 30,
    hobby: "Soccer",
    skills: ["freekick", "speed", "dribble"],
  },
  {
    name: "Neymar",
    age: 28,
    hobby: "Soccer",
    skills: ["freekick", "dribble"],
  },
  {
    name: "Ronaldo",
    age: 35,
    hobby: "Soccer",
    skills: ["heading", "speed", "dribble"],
  },
  {
    name: "MeSSi",
    age: 35,
    hobby: "Soccer",
    skills: ["heading", "speed", "dribble"],
  },
];

let topPlayer = "messi";

function bestPlayer(topPlayer, soccerPlayers, age) {
  if (age > 10) {
    return soccerPlayers.filter((player) => player.age > 30);
  }

  return soccerPlayers.find(
    (player) => player.name.toLowerCase().indexOf(topPlayer.toLowerCase()) === 0
  );
}

bestPlayer(topPlayer, soccerPlayers, 50); //(2) [{…}, {…}]
