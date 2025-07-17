import { useState, useEffect } from 'react';
import './EffectAPI.css'

export default function EffectAPI() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [API, setAPI] = useState(false);

    useEffect(() => {
        if (!API) return;

        // Usamos uma função assíncrona dentro do useEffect
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
                const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
                setUsuarios(data); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false); // Finaliza o carregamento
                setAPI(false)
            }
        }

        fetchUsuarios();
    }, [{API}]); // O array vazio garante que o efeito execute apenas uma vez

    if (loading) {
        return <p>Carregando...</p>;
    }

    function ChamarAPI() {
        setAPI(true)
    }

    return (
        <div className='container'>
            <h1 className='tituloOne'>Listagem de API</h1>
            <div className="tables">
                <ul className='table' id='tableName'>
                    <h2>NAMES</h2>
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>{usuario.name}</li>
                    ))}
                    <button className='btnAPI' onClick={ChamarAPI}>Chamar API</button>
                </ul>
                <ul className='table' id='tableUsername'>
                    <h2>USERNAMES</h2>
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>{usuario.username}</li>
                    ))}
                    <button className='btnAPI' onClick={ChamarAPI}>Chamar API</button>
                </ul>
                <ul className='table' id='tableCidades'>
                    <h2>CIDADES</h2>
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>{usuario.address.city}</li>
                    ))}
                    <button className='btnAPI' onClick={ChamarAPI}>Chamar API</button>
                </ul>
            </div>    
        </div>
    );
}