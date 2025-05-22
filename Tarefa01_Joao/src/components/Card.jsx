import "./Card.css"


export default function Card({imageCard, namePersonagem}){

    return(
        <div>
            <figure>
                <img src={imageCard} alt="Imagem abstrata de corrente" />
                <figcaption>{namePersonagem}</figcaption>
            </figure>
        </div>
    )
}