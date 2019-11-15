function initGreeting(name, greeting){
  return function(time){
    return `${name} ${greeting}. The time is ${time}`;
  };
}

const eveningGeorge = initGreeting('George', 'Evening');

const time = new Date(Date.now());

console.log(eveningGeorge(`${time.getHours()}:${time.getMinutes()}`));