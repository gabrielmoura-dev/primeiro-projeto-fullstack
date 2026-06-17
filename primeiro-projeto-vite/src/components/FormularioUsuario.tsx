import { useState } from "react";
import axios from "axios";

function FormularioUsuario () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const handleCadastrar = async () => {
        try {
            await axios.post('http://localhost:3000/usuarios', {
            nome,
            email,
            telefone
        });
        console.log('Cadastrado com sucesso!');
        } catch (erro) {
            console.log('Erro ao cadastrar!', erro);
        }
    };
    return <div>
        <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
        />
        <input
            type = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder = "Digite seu e-mail"
        />
        <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"        
        />
        <button onClick={handleCadastrar}>Cadastrar</button>
    </div>;
};
export default FormularioUsuario;
