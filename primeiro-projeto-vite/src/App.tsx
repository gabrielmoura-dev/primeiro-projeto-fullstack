import axios from 'axios';
import { useState } from 'react';
import FormularioUsuario from './components/FormularioUsuario';

function App() {
  const [pokemons, setPokemons] = useState ([]);
  const [mensagem, setMensagem] = useState ('');
  const [mensagemJSON, setMensagemJSON] = useState<{hello: string} | null>(null);
  async function buscarPokemons () {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      setPokemons(response.data.results);
    } catch (erro) {
      console.log("Esse code deu mole")
    } finally {
      console.log("Negócio deu good!")
    }
  }
  async function consultaHello() {
    try {
      const responseHello = await axios.get('http://localhost:3000/hello')
      setMensagem(responseHello.data);
    } catch (erro) {
      console.log("Essa consulta /hello erro irmao!")
    } finally {
      console.log("Deu tudo certo irmao!")
    }
  }
  async function consultaJSON() {
    try {
      const responseJSON = await axios.get('http://localhost:3000/hello-json')
      setMensagemJSON(responseJSON.data)
    } catch (erro) {
      console.log("Essa consulta /hello-json deu errado!")
    } finally {
      console.log("A consulta deu certo!")
    }
  }
  
  return (
    <div>
      <FormularioUsuario />
      <button onClick={buscarPokemons}>Buscar Pokemons</button>
      {pokemons.map((pokemon: any) => (
        <p>{pokemon.name}</p>
      ))}
      <button onClick={consultaHello}>Testar Consulta da API</button>
      <p>{mensagem}</p>
      <button onClick={consultaJSON}>Testar Consulta do JSON</button>
      <p>{mensagemJSON?.hello}</p>
    </div>
  );
}export default App;
