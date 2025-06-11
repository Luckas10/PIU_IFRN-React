import { useState } from 'react'

export default function ContadorDeClicks() {
    const valorLimite = 10;
    const valorMinimo = 0;
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Contador de Clicks <br /> bidirecional</h1>
            <div className="container">
                <p clask>{count}</p>
                <br />

                {/* Botão de decremento para caso o contador seja menor que o valor minimo 
                ele mude o seu valor no style do proprio botão utilizando condicional,
                operador ternário */}

                <button
                    style={{
                        backgroundColor: count < valorMinimo ? 'red' : 'black',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        marginRight: '20px',
                    }}
                    className='btnDecremento'
                    // Decremento utilizando useState para modificar atravéz de uma função anônima
                    onClick={() => setCount((count) => count - 1)}
                >
                    Decremento
                </button>

                {/* Botão de incremento com a lógica de caso o valor do contador seja menor 
                que o valor mínimo, ele modifique a cor, utilizando o style no próprio botão
                com operador ternário */}

                <button
                    style={{
                        backgroundColor: count > valorLimite ? 'green' : 'black',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                    }}
                    className='btnIncremento'
                    // Incremento utilizando useState para modificar atravéz de uma função anônima
                    onClick={() => setCount((count) => count + 1)}
                >
                    Incremento
                </button>
            </div>
        </>
    )
}
