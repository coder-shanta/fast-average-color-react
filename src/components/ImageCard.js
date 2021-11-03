import { useRef } from 'react';
import FastAverageColor from 'fast-average-color';

import './ImageCard.css';

const ImageCard = ({ title, image }) => {
    const imgRef = useRef();
    const cardRef = useRef();

    const setBackgroundColor = () => {
        const fac = new FastAverageColor();
        const img = imgRef.current;
        const card = cardRef.current;

        fac.getColorAsync(img).then((color) => {
            card.style.backgroundColor = color.rgba;
            card.style.color = color.isDark ? '#fff' : '#000';
        });
    };

    return (
        <div ref={cardRef} className="card">
            <img
                ref={imgRef}
                src={image}
                alt={title}
                onLoad={setBackgroundColor}
                crossOrigin="Anonymous"
            />

            <div className="card-body">
                <h3>{title}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    possimus repellat atque provident quisquam quia illo dolores
                    minima, ea impedit veniam perspiciatis alias! Suscipit ut
                    itaque voluptas consequuntur qui libero?
                </p>
            </div>
        </div>
    );
};

export default ImageCard;
