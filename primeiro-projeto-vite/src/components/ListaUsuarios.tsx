import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ListaUsuarios (props: { onEditar: (usuario: any) => void }) {
    const [usuarios, setUsuarios] = useState([]);
    useEffect (() => {
        const buscarUsuarios = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/usuarios`);
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
                <button onClick={() => props.onEditar(usuario)}>Editar</button>
                </div>
        ))}
    </div>
}
export default ListaUsuarios;