import './Error.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import errorImg from '../assets/hero5.png'

const Error = () => {
    const matches = useMediaQuery('(max-width: 1023px)');

    return (
		<>
			{matches ? (
				<div className="errorMobile">
                    <img src={errorImg} alt="error404" />
					<div className="text">
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                        <p>Oops... Page not found</p>
                        <a href="/">Back Home</a>
                    </div>
				</div>
			) : (
				<div className="errorDesktop">
					<div className="error">
						<div className="text">
							<h1><span>4</span><span>0</span><span>4</span></h1>
							<p>Oops... Page not found</p>
                            <a href="/">Back Home</a>
						</div>
						<img src={errorImg} alt="error404" />
					</div>
				</div>
			)}
		</>
	);
}

export default Error;