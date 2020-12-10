import React, { useEffect, useState } from 'react';
import './MainViewer.scss';

export default function MainViewer({ mainImage }) {
    const [animeClass, setAnimeClass] = useState('');
    useEffect(() => {
        setAnimeClass('zoomInAnimation');
        setTimeout(() => {
            setAnimeClass('');
        }, 400);
    }, [mainImage]);

    return (
        <>
            <div className='rightmaindiv d-flex align-items-center justify-content-center'>
                {mainImage !== '' ? (
                    <img
                        className={'rightmainimg ' + animeClass}
                        src={mainImage}
                        alt={mainImage}
                    />
                ) : (
                    <div className='initialText'>
                        Please select a card from the menu
                    </div>
                )}
            </div>
        </>
    );
}
