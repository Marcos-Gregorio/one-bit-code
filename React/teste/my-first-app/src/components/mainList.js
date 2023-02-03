import {InfoPlanets} from './planet/planet.js';
import './index.css'
export const MainList = () =>{
   return( <>
    <h1>Lista de Planetas</h1>
    <hr></hr>
    <ul>
        <InfoPlanets/>
    </ul>
    </>
    )
}
