// OOP

function initSport(rugby, football, basketball) {
  return {
    rugby,
    football,
    basketball,

    getRugby: function() {
      return `This is a contact sport played by 15 people on each side the world champions are ${this.rugby} and have won it 3 times in total.`;
    },

    getFootball: function() {
      return `This is played by 11 people on each side, ${this.football}; are the Euro Champions`;
    },

    getBasketball: function() {
      return `I know very little about this sport I only know ${this.basketball}`;
    }
  };
}
const mySport = initSport("New Zealand", "Portugal", "Lebron James");

console.log(mySport);

console.log(mySport.getRugby());
console.log(mySport.getFootball());
console.log(mySport.getBasketball());

// Constructor

/*

function Sport(rugby, otherSport, ball, newCountry) {
  this.rugby = rugby;
  this.otherSport = otherSport;
  this.ball = ball;
  this.newCountry = newCountry;

  this.fullTeam = function() {
    if (this.rugby < 15) {
      return "You need some more players to play";
    }
    return "You have enough people to play";
  };

  this.makeUnderstand = function() {
    return `The aim of soccer is to get the soccerball in the net the ball is ${this.ball}.`;
  };

  this.allTogether = function() {
    return `Soccer is also called ${this.otherSport} and was started in England but many countries are better now such as ${this.newCountry}`;
  };
}

const infoSport = new Sport(15, "Football", "round", "Germany");

console.log(infoSport.fullTeam());

console.log(infoSport.makeUnderstand());
console.log(infoSport.allTogether());
*/
