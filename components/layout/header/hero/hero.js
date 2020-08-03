import style from './hero.module.scss';
import Link from 'next/link';
import ContactLink from './contactLink';
import AboutLink from './aboutLink';
import ShaneLogoLink from './shaneLogoLink';
import { useRouter } from 'next/router';



function Hero({ data }) {
    const router = useRouter();
    const slug = router.query.param;
    const entryList = [];
    let entryCheck;
    
    const generateLinks = () => {
        data.map((article, i) =>  { if(i < 3) entryList.push(article); });
        entryCheck = entryList[slug];
    }

    generateLinks();

    if(entryCheck) {
        console.log(entryCheck, entryList)
    }

    //  Create function class to make dynamic page links for /p/1...etc
    // Create Contentful account to populate real data
    //  Check docs to merge NextJS and Contentful

    return (
        <>
        <AboutLink />
        <ContactLink />
        <ShaneLogoLink />
        </>
    )
}

export default Hero;