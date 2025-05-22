import React, { useEffect, useState } from "react";
import "./Galery.css";

export default function Details({ image, name, position, age, extraInfo, onClose }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 10); // Delay para ativar transição
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => onClose(), 300); // Espera o fade-out
    };

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div
                className={`modal-content ${visible ? "modal-show" : "modal-hide"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-button" onClick={onClose}>&times;</button>
                <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
                <h2>{name}</h2>
                <div className="modal-description">
                    <p><strong>Posição:</strong> {position}</p>
                    <p><strong>Idade:</strong> {age} anos</p>
                    <p><strong>Informação extra:</strong> {extraInfo}</p>
                </div>
            </div>
        </div>
    );
}
