import { useState } from "react";
import { Destinos } from "./dadosPesquisa";
import "./index.css"



const Pesquisa=()=> {
    const [destinosPesquisados, setDestinosPesquisados] = useState([])
    const fazPesquisa =(evento) => {
        const destinoDigitado =evento.target.value
        const resultadoPesquisa = Destinos.filter(destino=>destino.nome.includes(destinoDigitado))
        setDestinosPesquisados(resultadoPesquisa)}
        


    return (
        <div className="buscaContainer">
            <h1 class='col-12'>Destinos</h1>
        <input className='busca col-12' type="text"  placeholder="Pesquisa"  onChange={evento => fazPesquisa(evento)}
        />

    {destinosPesquisados.map(destino=> ( 

<div className="card my-5">
<div className="imgBx">
    <img src= {destino.src} alt="images"/>
</div>
<div className="details">
    <h2>{destino.nome}<br/><span>{destino.valor}</span></h2>
</div>
</div>
                
        ))}
        </div>
    )
}

export default Pesquisa;
