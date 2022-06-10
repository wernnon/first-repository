
import { useState } from "react";

function Button(){

    const [contador, setContador] = useState(0);

    function clique(){
        console.log("Você visitou o perfil, parabéns");
        setContador(contador+1);
    }

    function zerar(){
        console.log("Você resetou as clickada ual");
        setContador(0);
    }

        return(
            <div>
                <button onClick={clique}>botão</button>
                <p>Contador de visitas: {contador}</p>
                <button onClick={() => { setContador(0)}}>Reset do contador</button>
            </div>
        );
}
export default Button;