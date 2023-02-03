const setPilot = ( newPilot: string, spaceship:{name?: string; pilot: string; speed?: number; inMission?: boolean;})=>{
    spaceship.pilot = newPilot;
}
const acelerando = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
    spaceship.speed = targetSpeed;
}
const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
    spaceship.inMission = true;
}

const spaceship = {
    name:'',
    pilot:'',
    speed:0,
    inMission:false,
}
const piloto = 'Han solo'

spaceship.name ='Millennium Falcon'
setPilot(piloto,spaceship);
acelerando( 50 ,spaceship);
sendToMission(spaceship);
console.log(spaceship)

  