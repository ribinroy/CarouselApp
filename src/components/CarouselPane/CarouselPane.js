import React from 'react';
import { imagesArray } from '../../json/db';

export default function CarouselPane() {
    return (
        <div className='carousel-pane'>
            {imagesArray.map((el) => {
                return <img src={el.image.default} alt={'img'} />;
            })}
        </div>
    );
}
