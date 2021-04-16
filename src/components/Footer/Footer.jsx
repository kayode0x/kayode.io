import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className="socialIcons">
				<a href="http://www.github.com/kayode0x" target="_blank" rel="noopener noreferrer">
					<SiGithub />
				</a>
				<a href="http://www.twitter.com/kayode0x" target="_blank" rel="noopener noreferrer">
					<SiTwitter />
				</a>
				<a
					href="https://www.linkedin.com/mwlite/in/kayode-ogunmakinwa-914003196"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiLinkedin />
				</a>
			</div>
			<div className="inspired">
				<p>Inspired by <a href="http://twitter.com/kadetXx" target="_blank" rel="noopener noreferrer"> Kadet </a> and <a href="http://twitter.com/timigod"> Timi Ajiboye </a></p>
			</div>
		</footer>
	);
};

export default Footer;
