import useMediaQuery from '@material-ui/core/useMediaQuery';
import WorkMobile from './WorkMobile';
import WorkDesktop from './WorkDesktop';

const Work = () => {
    const matches = useMediaQuery('(max-width: 1023px)');
    return (
		<> 
			{matches ? (
				<WorkMobile />
			) : (
				<WorkDesktop />
			)}
		</>
	);
}

export default Work;