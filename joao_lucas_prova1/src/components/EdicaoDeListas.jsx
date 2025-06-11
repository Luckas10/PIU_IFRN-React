import dados_carros from '../assets/dados_carro.js';

export default function EdicaoDeListas() {

    // Filtragem de carros vermelhos na array disponibilizada, utilizando filter
    const carros = dados_carros;
    const carrosVermelhos = carros.filter(carro => carro.cor === 'vermelho');

    return (
        <>
            <h1>TODOS OS CARROS</h1>
            {/* Filtragem de carros utilizando map na lista que foi disponibilizada, onde
            primeiramente eu seleciono os dicionários e após vou mostrando em uma lista
            somente o modelo e o ano */}

            <ul>
                {carros.map((dicionario) => (
                    <li key={dicionario.id}>
                        Modelo: {dicionario.modelo}, Ano: {dicionario.ano}
                    </li>
                ))}
            </ul>

            <h1>CARROS VERMELHOS</h1>
            {/* Varrendo array com os carros filtrados somente de cores vermelhas */}
            <ul>
                {carrosVermelhos.map(carro => (
                    <li key={carro.id}>
                        {carro.modelo}
                    </li>
                ))}
            </ul>
        </>
    )
}
