import React, { useState, useEffect } from 'react';
import './Tasks.css'

export default function FormState() {
    const [id, setId] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [prioridade, setPrioridade] = useState(0);
    const [concluida, setConcluida] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    // Buscar tarefas da API
    const fetchTarefas = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tarefas/');
            const data = await response.json();
            setTarefas(data);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    // Buscar tarefas ao carregar o componente
    useEffect(() => {
        fetchTarefas();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novaTarefa = { id, descricao, prioridade, concluida };

        try {
            const response = await fetch('http://127.0.0.1:8000/tarefas/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaTarefa),
            });

            if (response.ok) {
                // Atualizar lista
                fetchTarefas();
                // Resetar formulário
                setId(0);
                setDescricao('');
                setPrioridade(0);
                setConcluida(false);
            }
        } catch (error) {
            console.error('Erro ao enviar tarefa:', error);
        }
    };

    return (
        <div>
            <h2>Formulário com useState e API</h2>

            <form className='formAPI' onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Id: </span>
                        <input
                            type="number"
                            onChange={(e) => setId(parseInt(e.target.value))}
                            value={id}
                            placeholder="Digite o ID"
                        />
                    </label>

                    <label>
                        <span>Descrição: </span>
                        <input
                            type="text"
                            onChange={(e) => setDescricao(e.target.value)}
                            value={descricao}
                            placeholder="Digite a descrição"
                        />
                    </label>

                    <label>
                        <span>Prioridade: </span>
                        <input
                            type="number"
                            onChange={(e) => setPrioridade(parseInt(e.target.value))}
                            value={prioridade}
                            placeholder="Prioridade"
                        />
                    </label>

                    <label>
                        <span>Concluída:</span>
                        <input
                            type="checkbox"
                            onChange={(e) => setConcluida(e.target.checked)}
                            checked={concluida}
                        />
                    </label>

                    <input type="submit" value="Enviar" />
                </div>
            </form>

            <h3>Tarefas Cadastradas</h3>
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        <strong>{tarefa.descricao}</strong> - Prioridade: {tarefa.prioridade} -{" "}
                        {tarefa.concluida ? "Concluída" : "Pendente"}
                    </li>
                ))}
            </ul>
        </div>
    );
}
