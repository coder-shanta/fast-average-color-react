import React, { useState, useEffect } from 'react';
import './App.css';

import ImageCard from './components/ImageCard';
import ImageCard2 from './components/ImageCard2';

const App = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://pixabay.com/api/?key=24152025-f66880e921660d0f3d98f09a5')
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
            })
            .catch(() => {
                alert('API maximum rate limit reached. Try again after later.');
            });
    }, []);

    return (
        <div>
            <header className="header">
                <h1>Fast Average Color vs Color Thief</h1>
                <p>
                    This is the react implementation of FastAvarageColor and
                    colorthief.
                </p>

                <a href="https://github.com/coder-shanta/fast-average-color-react">
                    Source code
                </a>
            </header>

            <div className="container">
                {images.map((img, idx) => (
                    <React.Fragment key={idx}>
                        <ImageCard title={img.tags} image={img.previewURL} />
                        <ImageCard2 title={img.tags} image={img.previewURL} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default App;
