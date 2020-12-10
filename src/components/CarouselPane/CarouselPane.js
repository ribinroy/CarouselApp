import React from 'react';
import './CarouselPane.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { imagesArray } from '../../json/db';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CarouselPane(props) {
    console.log(props);

    const { callbackFunction } = props;

    const [idVal, setidVal] = React.useState([]);

    React.useEffect(()=>{
        const idTemp = [];
        const idArrary = [];
        const finalArray = [];
        imagesArray.forEach(element => {
            if( idTemp.indexOf(element.carousel_id) === -1 )
            {
                idTemp.push(element.carousel_id);
                idArrary[element.carousel_id] = 1;                
            }  
            else{
                idArrary[element.carousel_id] += 1;
            }  
        });
        idTemp.forEach(element => {
            finalArray.push({
                id: element,
                count: idArrary[element]
            });
        });
        console.log(finalArray);
        setidVal(finalArray);
    },[callbackFunction]);
    
    return (
        <>
        { idVal.map((value)=>{
            return(
                <div className='carousel-pane'>
                <CarouselProvider
                    // naturalSlideWidth={100}
                    // naturalSlideHeight={125}
                        totalSlides={value.count}
                    >
                    <Slider>
                        {imagesArray.map((el, index) => {
                            return el.carousel_id === value.id ? 
                            <Slide index={index}>
                                <div className="container1">
                                    <img className="image" onClick={()=>callbackFunction(el.image.default)} src={el.image.default} alt={el.image_text} />
                                    <div className="overlay" onClick={()=>callbackFunction(el.image.default)} >
                                        <div className="text">{el.image_text}</div>
                                    </div>
                                    </div>
                            </Slide> : null;
                        })}
                        </Slider>
                        <ButtonBack>
                            <ArrowBackIcon />
                        </ButtonBack>
                        <ButtonNext>
                            <ArrowForwardIcon />
                        </ButtonNext>
                    </CarouselProvider>
            </div> 
            );
        }) }
        </>
    );
}
