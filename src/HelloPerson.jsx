//HelloPerson
import'./HelloPerson.css';

function HelloPerson({nome, idade, foto, caracteristica}){

    return(

        <div className="divid">

            {nome && 
                <p className="desc">
                    Hello {nome}, {idade}, <span className="info">{caracteristica}</span>
                </p>} 
            <img className="pic"
                
                src={foto} 
                alt={nome} 
            />
        </div>
    );
}

export default HelloPerson;