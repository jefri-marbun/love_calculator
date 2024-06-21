// src/components/LoveCalculator.js
import React, { useState } from 'react';
import '../styles/LoveCalculator.css';

const LoveCalculator = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [percentage, setPercentage] = useState(null);

    const calculateLove = () => {
        const combinedLength = name1.length + name2.length;
        const randomPercentage = Math.floor((combinedLength % 100) + Math.random() * (100 - combinedLength % 100));
        setPercentage(randomPercentage);
    };

    const getResultText = (percentage) => {
        if (percentage >= 0 && percentage <= 25) {
            return "Nice Try ya ges ya";
        } else if (percentage > 25 && percentage <= 50) {
            return "Cinta mu masih bisa diperjuangkan";
        } else if (percentage > 50 && percentage <= 75) {
            return "Mungkin dia akan menjadi pasanganmu";
        } else if (percentage > 75 && percentage < 100) {
            return "Selamat! Kalian cucok meong!";
        } else if (percentage === 100) {
            return "Ditunggu undangannya yaaa..";
        }
        return "";
    };

    return (
        <div className="love-calculator">
            <h1 className="title">Kalkulator Cinta</h1>
            <p className="subtitle">Masukkan nama kalian dan hitung persentase cinta!</p>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Nama Anda"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    className="love-input"
                />
                <input
                    type="text"
                    placeholder="Nama Pasangan Anda"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    className="love-input"
                />
            </div>
            <div>
            <button onClick={calculateLove} className="love-button">Hitung</button>
            </div>
            {percentage !== null && (
                <div className="result">
                    <p>
                        Persentase cinta antara <strong>{name1}</strong> dan <strong>{name2}</strong> adalah 
                        <strong> {percentage}%</strong>
                    </p>
                    <div className="love-bar-container">
                        <div className="love-bar" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <div className="heart-icon">💓</div>
                    <p className="love-result-text">{getResultText(percentage)}</p>
                </div>
            )}
           
        </div>
    );
};

export default LoveCalculator;
