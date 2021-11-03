import React, { useState, useEffect } from 'react';
import './App.css';

import ImageCard from './components/ImageCard';

const App = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://pixabay.com/api/?key=24152025-f66880e921660d0f3d98f09a5')
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
            });
    }, []);

    return (
        <div>
            <header className="header">
                <h1>FastAvarageColor</h1>
                <p>This is the react implementation of FastAvarageColor.</p>

                <a href="https://github.com/coder-shanta/fast-average-color-react">
                    Source code
                </a>
            </header>

            <div className="container">
                {images.map((img, idx) => (
                    <ImageCard
                        key={idx}
                        title={img.tags}
                        image={img.previewURL}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
