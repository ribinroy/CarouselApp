import React, { useState, useEffect } from 'react';
import './CarouselPane.scss';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
import { imagesArray } from '../../json/db';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CarouselPane({ callbackFunction }) {
    const [idVal, setidVal] = useState([]);

    useEffect(() => {
        const idTemp = [];
        const idArrary = [];
        const finalArray = [];
        imagesArray.forEach((element) => {
            if (idTemp.indexOf(element.carousel_id) === -1) {
                idTemp.push(element.carousel_id);
                idArrary[element.carousel_id] = 1;
            } else {
                idArrary[element.carousel_id] += 1;
            }
        });
        idTemp.forEach((element) => {
            finalArray.push({
                id: element,
                count: idArrary[element],
            });
        });
        setidVal(finalArray);
    }, [callbackFunction]);

    return (
        <>
            {idVal.map((value, index) => {
                return (
                    <div className='carousel-pane' key={index}>
                        <CarouselProvider
                            totalSlides={value.count}
                            dragEnabled={false}
                            touchEnabled={false}>
                            <Slider>
                                {imagesArray.map((el, index) => {
                                    return el.carousel_id === value.id ? (
                                        <Slide key={index}>
                                            <div className='container1'>
                                                <img
                                                    className='image'
                                                    onClick={() =>
                                                        callbackFunction(
                                                            el.image.default
                                                        )
                                                    }
                                                    src={el.image.default}
                                                    alt={el.image_text}
                                                />
                                                <div
                                                    className='overlay'
                                                    onClick={() =>
                                                        callbackFunction(
                                                            el.image.default
                                                        )
                                                    }>
                                                    <div className='text'>
                                                        {el.image_text}
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ) : (
                                        ''
                                    );
                                })}
                            </Slider>
                            <ButtonBack>
                                <ChevronLeftIcon />
                            </ButtonBack>
                            <ButtonNext>
                                <ChevronRightIcon />
                            </ButtonNext>
                        </CarouselProvider>
                    </div>
                );
            })}
        </>
    );
}
