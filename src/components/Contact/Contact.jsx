import './Contact.scss';
import contactImg from '../../assets/faces/hero7.png';
import { SiTwitter, SiInstagram, SiGmail, SiLinkedin } from 'react-icons/si';

const Contact = () => {
	return (
		<div className="contact">
			<div className="intro">
				<p className="contactText">Reach Out</p>
				<img src={contactImg} alt="contact" />
				<div className="contactIcons">
					<a
						href="https://www.linkedin.com/in/kayode-ogunmakinwa"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiLinkedin />
					</a>
					<a href="mailto:contact@kayode.io">
						{' '}
						<SiGmail />
					</a>
					<a href="http://twitter.com/kayode0x" target="_blank" rel="noopener noreferrer">
						{' '}
						<SiTwitter />
					</a>
					<a href="http://instagram.com/kayode0x" target="_blank" rel="noopener noreferrer">
						{' '}
						<SiInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
