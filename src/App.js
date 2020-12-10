import React from 'react';
import './App.scss';
import './assets/css/bootstrap.min.css';
import CarouselPane from './components/CarouselPane/CarouselPane';
import MainViewer from './components/MainViewer/MainViewer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function App() {
    const [mainImage, setmainImage] = React.useState('');
    const [showMenu, setshowMenu] = React.useState(false);

    function imageChange(value) {
        setmainImage(value);
        setshowMenu(false);
    }

    function toggleMenu() {
        setshowMenu(!showMenu);
    }

    return (
        <div className='App'>
            <div className={'top-header ' + (showMenu ? 'active' : '')}>
                BUY ITEMS
                <div className='menubar' onClick={() => toggleMenu()}>
                    {showMenu ? (
                        <CloseIcon
                            color='primary'
                            className='zoomInAnimation'
                            fontSize='large'
                        />
                    ) : (
                        <MenuIcon
                            color='primary'
                            className='zoomInAnimation'
                            fontSize='large'
                        />
                    )}
                </div>
            </div>
            <div className={'leftpane  ' + (showMenu ? 'active' : '')}>
                <div className='leftCarousel'>
                    <CarouselPane callbackFunction={imageChange} />
                </div>
            </div>
            <div className='rightpane'>
                <MainViewer mainImage={mainImage} />
            </div>
        </div>
    );
}

export default App;
