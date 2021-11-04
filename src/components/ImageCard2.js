import { useRef } from 'react';
import ColorThief from 'colorthief';

import './ImageCard.css';

const rgbToHex = (rgb) =>
    '#' +
    rgb
        .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');

const ImageCard2 = ({ title, image }) => {
    const imgRef = useRef();
    const cardRef = useRef();

    const setBackgroundColor = () => {
        const img = imgRef.current;
        const card = cardRef.current;

        const ct = new ColorThief();

        const rgb = ct.getColor(img);
        card.style.backgroundColor = rgbToHex(rgb);
    };

    return (
        <div ref={cardRef} className="card">
            <div className="tag">ColorThief</div>
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

export default ImageCard2;
