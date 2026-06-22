import { useEffect, useState } from "react";
import axios from "axios";

function FormularioUsuario (props: { usuarioEmEdicao?: any}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    useEffect(() => {
        if (props.usuarioEmEdicao) {
            setNome(props.usuarioEmEdicao.nome);
            setEmail(props.usuarioEmEdicao.email);
            setTelefone(props.usuarioEmEdicao.telefone);
        }
    }, [props.usuarioEmEdicao]);
    const handleCadastrar = async () => {
        try {
            if (props.usuarioEmEdicao) {
                await axios.put(`http://localhost:3000/usuarios/${props.usuarioEmEdicao.id}`, {
                    nome,
                    email,
                    telefone
                });
            } else {
                await axios.post(`http://localhost:3000/usuarios`, {
                    nome,
                    email,
                    telefone
                });      
            }
            console.log('Cadastrado com sucesso!');
            window.location.reload();
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
