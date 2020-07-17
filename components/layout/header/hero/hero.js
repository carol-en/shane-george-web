import style from './hero.module.scss';
import Link from 'next/link';
import ContactLink from './contactLink';
import AboutLink from './aboutLink';
import ShaneLogoLink from './shaneLogoLink';


function Hero() {
    return (
        <>
        <AboutLink />
        <ContactLink />
        <ShaneLogoLink />
        </>
    )
}

export default Hero;