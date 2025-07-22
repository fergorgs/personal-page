import { useState, useEffect } from 'react';

export const SCREEN_SIZE = {
    MOBILE: 'MOBILE',
    DESKTOP: 'DESKTOP'
};

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState(
        window.innerWidth <= 768 ? SCREEN_SIZE.MOBILE : SCREEN_SIZE.DESKTOP
    );

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth <= 768 ? SCREEN_SIZE.MOBILE : SCREEN_SIZE.DESKTOP);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}