import { ImgList } from '../../shared/imgStyle/ImgList'
export const Planet = (props) =>{
    <>
    <h2>{props.Name}</h2>
    <p>{props.Description}</p>
    <a href={props.Link}>Clique aqui para ler mais</a>
    <ImgList imgLink = {props.Imagem}/>


    </>
}