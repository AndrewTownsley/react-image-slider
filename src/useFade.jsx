import { useState, useEffect } from 'react';
import './useFade.scss';

const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        if(show) setIsVisible(true);
    }, [show]);

    let fromProps = {
        style: { animation: `${show ? 'fadeIn' : 'fadeOut'} 1s` },
        onAnimationEnd: () => !show  && setIsVisible(false)
    };

    let toProps = {
        style: { animation: `${show ? 'fadeOut' : 'fadeIn'} 1s` },
        onAnimationEnd: () => show && setIsVisible(true)
    };


  return [isVisible, setShow, fromProps, toProps];
}

export default useFade;