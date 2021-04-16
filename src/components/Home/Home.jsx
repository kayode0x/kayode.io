import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useState } from 'react';
import HomeMobile from './HomeMobile';
import HomeDesktop from './HomeDesktop';

const Home = ({ setActiveNav }) => {
    const [heroIndex, setHeroIndex] = useState(1)
    const handleHeroChange = () => {
        if(heroIndex === 4){
            setHeroIndex(1);
        } else {
            setHeroIndex(heroIndex + 1);
        }
    }
    const matches = useMediaQuery('(max-width: 1023px)');
    return (
		<>
			{matches ? (
				<HomeMobile heroIndex={heroIndex} handleHeroChange={handleHeroChange} />
			) : (
				<HomeDesktop setActiveNav={setActiveNav} heroIndex={heroIndex} handleHeroChange={handleHeroChange} />
			)}
		</>
	);
}

export default Home;