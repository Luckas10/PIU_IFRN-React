// 02 - Implemente um input que a medida que o usuário insere dados (um texto por exemplo) o background da tela mude de cor.
// (Dica: esse componente é muito parecido com o contador de clicks CounterClicks.jsx mostrado em sala. A alteração será trocar o botão por um input e substituir o evento onClick por um onChange)

import { useState, useEffect } from "react";

function ChangeColorInput() {
    const [text, setText] = useState("");

    function handleColorInput () {
        const palette = ["#d4b483", "#a89f91", "#c3d3c0", "#d9c6e0", "#f2d8a7"];
        const randomColor = palette[Math.floor(Math.random() * palette.length)];
        document.body.style.backgroundColor = randomColor;
    }

    useEffect(() => {
        if (text.length > 0) {
            handleColorInput()
        }
    }, [text]);

    return (
        <>
            <h4>02 - Implemente um input que a medida que o usuário insere dados (um texto por exemplo) o background da tela mude de cor.</h4>
            <input type="text" placeholder="Digite algo…" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}

export default ChangeColorInput;

