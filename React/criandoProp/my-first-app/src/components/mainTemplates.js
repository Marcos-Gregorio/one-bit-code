import { Planet } from "./planetComponent/planet"
export const MainTemplate = () =>{
    return(
        <>
        <h1>
            Planetas
        </h1>
        <hr></hr>
        <ul>
            <Planet 
             Name ='Mercúrio' 
             Description = 'O planeta Mercúrio é o mais próximo do Sol. A sua principal característica são as elevadas temperaturas'
             Link ='https://mundoeducacao.uol.com.br/geografia/planetas.htm'
             Imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"

            />
        </ul>
        </>

    )
}