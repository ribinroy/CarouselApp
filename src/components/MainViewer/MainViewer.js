import React from 'react';
import CarouselPane from '../CarouselPane/CarouselPane';
import styles from './MainViewer.scss';


export default function MainViewer(props) {

    const { mainImage } = props;

    console.log(mainImage);

    // React.useEffect(()=>{

    // },[mainImage]);
    
    return (
        <>
            <div className="rightmaindiv d-flex align-items-center justify-content-center">
                { mainImage !== "" ?
                    <img className="rightmainimg" src={mainImage} />    
                    : <div className="initialText">
                        Please select a card from the menu
                    </div>
                }
            </div> 
        </>
    );
}
