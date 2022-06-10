//App.jsx
import './App.css'
import HelloWorld from './HelloWorld'
import Button from './Button'
import HelloPerson from './HelloPerson'
import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");
  const pessoas = [
    {
      nome: "danielsson  ",
      idade: 20,
      caracteristica: "maromba"
    },
    {
      nome: "Jorgin",
      idade: 25,
      caracteristica: "frango."
    },
    {
      nome: "Paulo",
      idade: 7,
      caracteristica: "paulo."
    },
  ]

  return (
    <div>
      <input type="text" onChange = { (event) => {setNome(event.target.value)} } />
      <HelloWorld />
      <Button />
      <div className="div">
        {pessoas.map( (pessoa) => {
        return <HelloPerson nome={pessoa.nome} idade={pessoa.idade} caracteristica={pessoa.caracteristica} foto={"https://www.correio24horas.com.br/fileadmin/_processed_/5/0/csm_xbel_marx.jpg.pagespeed.ic.6v4XAz8cU-_2064e95adf.jpg"}/>
        })}
        </div>
    </div>
  )
}
export default App