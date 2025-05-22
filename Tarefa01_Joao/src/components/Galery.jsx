import { useState } from "react";
import Asahi from "../assets/images/Asahi.png";
import Daichi from "../assets/images/Daichi.png";
import Ennoshita from "../assets/images/Ennoshita.png";
import Hinata from "../assets/images/Hinata.png";
import Kageyama from "../assets/images/Kageyama.png";
import Sugawara from "../assets/images/Sugawara.png";
import Kinoshita from "../assets/images/Kinoshita.png";
import Narita from "../assets/images/Narita.png";
import Nishinoya from "../assets/images/Nishinoya.png";
import Tanaka from "../assets/images/Tanaka.png";
import Tsukishima from "../assets/images/Tsukishima.png";
import Yamaguchi from "../assets/images/Yamaguchi.png";
import Card from "./Card";
import Details from "./Details";
import "./Galery.css";

const characters = [
    {
        image: Asahi,
        name: "Asahi Azumane",
        position: "Ala (Ponta)",
        age: 17,
        extraInfo: "Apesar de parecer intimidador, é muito gentil. Um dos atacantes mais fortes do time."
    },
    {
        image: Daichi,
        name: "Daichi Sawamura",
        position: "Capitão / Ala",
        age: 18,
        extraInfo: "Líder confiável e responsável. Mantém o time unido."
    },
    {
        image: Ennoshita,
        name: "Chikara Ennoshita",
        position: "Ala substituto",
        age: 17,
        extraInfo: "Calmo e sensato, frequentemente substitui os titulares quando necessário."
    },
    {
        image: Hinata,
        name: "Shōyō Hinata",
        position: "Pivô / Bloqueador central",
        age: 16,
        extraInfo: "Extremamente rápido e determinado. Apesar da baixa estatura, tem um salto impressionante."
    },
    {
        image: Kageyama,
        name: "Tobio Kageyama",
        position: "Levantador",
        age: 16,
        extraInfo: "Prodígio conhecido como 'Rei da Quadra'. Tem uma habilidade técnica impressionante."
    },
    {
        image: Sugawara,
        name: "Kōshi Sugawara",
        position: "Levantador reserva",
        age: 17,
        extraInfo: "Muito gentil e carismático. Serve como apoio emocional e técnico para o time."
    },
    {
        image: Kinoshita,
        name: "Hisashi Kinoshita",
        position: "Reserva / Sacador especializado",
        age: 17,
        extraInfo: "Apesar de pouco tempo em quadra, treina bastante para melhorar seu saque salto-flutuante."
    },
    {
        image: Narita,
        name: "Kazuhito Narita",
        position: "Central reserva",
        age: 17,
        extraInfo: "Participa de partidas quando os centrais titulares precisam de descanso."
    },
    {
        image: Nishinoya,
        name: "Yū Nishinoya",
        position: "Líbero",
        age: 17,
        extraInfo: "Defensor espetacular. Muito energético e tem reflexos incríveis."
    },
    {
        image: Tanaka,
        name: "Ryūnosuke Tanaka",
        position: "Ala",
        age: 16,
        extraInfo: "Impulsivo e barulhento, mas muito leal e determinado."
    },
    {
        image: Tsukishima,
        name: "Kei Tsukishima",
        position: "Central",
        age: 16,
        extraInfo: "Cético e sarcástico. Usa o raciocínio lógico para melhorar o bloqueio."
    },
    {
        image: Yamaguchi,
        name: "Tadashi Yamaguchi",
        position: "Sacador especializado",
        age: 16,
        extraInfo: "Inseguro, mas esforçado. Treina com dedicação para dominar o saque flutuante."
    }
];

export default function Galery() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="carousel">
                {characters.map((char, idx) => (
                    <div key={idx} onClick={() => setSelected(char)}>
                        <Card imageCard={char.image} namePersonagem={char.name} />
                    </div>
                ))}
            </div>
            {selected && (
                <Details
                    image={selected.image}
                    name={selected.name}
                    age={selected.age}
                    position={selected.position}
                    extraInfo={selected.extraInfo}
                    onClose={() => setSelected(null)}
                />
            )}
        </>
    );
}
