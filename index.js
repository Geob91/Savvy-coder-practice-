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
