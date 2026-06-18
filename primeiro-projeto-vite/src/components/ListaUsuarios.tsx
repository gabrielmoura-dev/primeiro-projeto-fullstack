import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ListaUsuarios () {
    const [usuarios, setUsuarios] = useState([]);
    const handleEditar = (id: number) => {
        console.log('Editar usuário:', id);
    };
    useEffect (() => {
        const buscarUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3000/usuarios');
                setUsuarios(response.data);
            } catch (erro) {
                console.log('Erro ao buscar usuarios', erro);
            }
        };
        buscarUsuarios();
    }, []);
    return <div>
        {usuarios.map((usuario: any) => (
            <div key={usuario.id}>
                <p>Nome: {usuario.nome}</p>
                <p>E-mail: {usuario.email}</p>
                <p>Telefone: {usuario.telefone}</p>
                <button onClick={() => handleEditar(usuario.id)}>Editar</button>
                </div>
        ))}
    </div>
}
export default ListaUsuarios;