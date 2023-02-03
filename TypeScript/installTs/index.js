var setPilot = function (newPilot, spaceship) {
    spaceship.pilot = newPilot;
};
var acelerando = function (targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
};
var spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false
};
var pilot = 'Han solo';
spaceship.name = 'Millennium Falcon';
setPilot(pilot, spaceship);
acelerando(50, spaceship);
sendToMission(spaceship);
console.log(spaceship);
