const spaceShip = {
    name: 'X-wing',
    speed:0
}

function accelerate(spaceship:{
    name: string; speed: number},speed: number){
        spaceShip.speed = speed
}
accelerate(spaceShip, 50)