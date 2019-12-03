const footballPlayers = [
  {
    Position: "Winger",
    name: "Cristiano Ronaldo",
    Country: "Portugal",
    club: "Juventus",
    goals: 400
  },
  {
    Position: "Winger",
    name: "Jadon Sancho",
    Country: "England",
    Club: "Borussia Dortmund",
    goals: 40
  },
  {
    Position: "Winger",
    name: "Lionel Messi",
    Country: "Argentina",
    Club: "Barcelona",
    goals: 606
  },
  {
    Position: "Striker",
    name: "Robert Lewandowski",
    Country: "Poland",
    Club: "Bayern Munich",
    goals: 260
  },
  {
    Position: "Striker",
    name: "Harry Kane",
    Country: "England",
    Club: "Tottenham Hotspurs",
    goals: 200
  },
  {
    Position: "Striker",
    name: "Sergio Aguero",
    Country: "Argentina",
    Club: "Manchester City",
    goals: 200
  },
  {
    Position: "Midfield",
    name: "Kevin De Bruyne",
    Country: "Belgium",
    Club: "Manchester City",
    goals: 60
  },
  {
    Position: "Midfield",
    name: "N'Golo Kante ",
    Country: "France",
    Club: "Chelsea",
    goals: 10
  },
  {
    Position: "Midfield",
    name: "Luka Modric",
    Country: "Croatia",
    Club: "Real Madrid",
    goals: 50
  },
  {
    Position: "Defender",
    name: "Virgil Van Dijk",
    Country: "Netherlands",
    Club: "Liverpool City",
    goals: 5
  }
];

//const longNames = users.filter(user => user.website.endsWith(".net"));
//const usersWithPrefixedName = users.map(user => `Mr${user.name}`);
//const userInfo = users.map(
//user => `${user.name} ${user.email} ${user.website}`
//);

// console.log(longNames);
// console.log(usersWithPrefixedName);
// console.log(userInfo);

const whereYouFrom = footballPlayers.map(user => `${user.Country}`);
const whichPlace = footballPlayers.filter(user => user.Country === "Portugal");
const position = footballPlayers.filter(user => user.Position === "Winger");

console.log(whereYouFrom);
console.log(whichPlace);
console.log(position);
