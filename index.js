class Striker {
  constructor(first, clubs) {
    this.first = first;
    this.clubs = clubs;
  }

  get allTeam() {
    return `${this.clubs}`;
  }
  get oldTeams() {
    return this.clubs.pop(club => {
      return club;
    });
  }

  get teamsWithM() {
    return this.clubs.filter(club => {
      if (club.startsWith("M")) {
        return club;
      }
    });
  }

  set oldTeams(footballTeams) {
    this.clubs = footballTeams;
  }

  set club(club) {
    this.club = club;
  }
}

const club = new Striker("Zlatan", [
  " Malmo, ",
  "Ajax, ",
  "Juventus, ",
  "Inter Milan, ",
  "Barcelona, ",
  "PSG, ",
  "Manchester United "
]);

//console.log(club);
console.log(club.teamsWithM);
