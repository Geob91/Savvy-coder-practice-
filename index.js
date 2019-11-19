// OOP
/*
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
      `I know very little about this sport I only know ${this.basketball}`;
    }
  };
}
const mySport = initSport("New Zealand", "Portugal", "Lebron James");

console.log(mySport.getRugby());

*/

// Constructor

function Sport(rugby, ball) {
  this.rugby = rugby;
  this.ball = ball;

  this.fullTeam = function() {
    if (this.rugby < 15) {
      return "You are needing some more players";
    }
    return "You have enough people";
  };

  this.makeUnderstand = function() {
    return `The aim of football is to get the football in the net the ball is ${this.ball}.`;
  };
}

const infoSport = new Sport(12, "round");

console.log(infoSport.fullTeam());

console.log(infoSport.makeUnderstand());
