import React, { useEffect } from 'react';

const HeroSectionAnimation = () => {
    useEffect(() => {
        const animateIntro = () => {
            const name = document.querySelector('.intro_content-el--name');
            const job = document.querySelector('.intro_content-el--job');

            name.style.transition = '0.8s';
            job.style.transition = '0.8s';
            name.style.transform = 'translateX(0)';
            name.style.opacity = '1';
            job.style.transform = 'translateX(0)';
            job.style.opacity = '1';
        };

        const timeoutId = setTimeout(animateIntro, 800);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    // The component doesn't return JSX here

    return null; // You can return null or an empty fragment since this component doesn't render anything
};

export default HeroSectionAnimation;
