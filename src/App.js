import React from 'react';
import './App.scss';
import './assets/css/bootstrap.min.css'
import CarouselPane from './components/CarouselPane/CarouselPane';
import MainViewer from './components/MainViewer/MainViewer';
import MenuIcon from '@material-ui/icons/Menu';

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
            <div className='leftpane d-xs-none'>
                <div className='leftHeader d-flex align-items-center justify-content-center'>
                    BUY ITEMS
                </div>
                <div className='leftCarousel'>
                    <CarouselPane callbackFunction={imageChange} />
                </div>
            </div>
            <div className='leftpane d-md-none d-sm-none d-lg-none' style={showMenu ? {height:"100vh"}:{height:"0vh"}}>
                <div className='leftHeader d-flex align-items-center justify-content-center'>
                    <div className="menubar" onClick={()=>toggleMenu()}>
                        <MenuIcon color="primary" fontSize="large" />
                    </div>
                    BUY ITEMS
                </div>
                <div className='leftCarousel'>
                    <CarouselPane callbackFunction={imageChange} />
                </div>
            </div>
            <div className='rightpane'>
                <div className="buyitemsmobile d-flex align-items-center justify-content-center d-md-none d-sm-none d-lg-none">
                    <div className="menubar" onClick={()=>toggleMenu()}>
                        <MenuIcon fontSize="large" />
                    </div>
                    BUY ITEMS
                </div>
               <MainViewer mainImage={mainImage} />
            </div>
        </div>
    );
}

export default App;
