import './Contact.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import contactImg from '../assets/hero6.png'
import { SiTwitter, SiInstagram, SiGmail } from 'react-icons/si';

const Contact = () => {
	const matches = useMediaQuery('(max-width: 1023px)');
	return (
		<>
			{matches ? (
				<div className="contactMobile">
					<div className="intro">
						<p className="contactText">Contact</p>
						<p className="subText">
							Send a mail or shoot a text with social media. I'll get back to you within 24hours.
						</p>
						<img src={contactImg} alt="contact"/>
						<div className="contactIcons">
							<a href="mailto:contact@kayode.io"> <SiGmail/> <p>Email</p></a>
							<a href="http://twitter.com/kayode0x" target="_blank" rel="noopener noreferrer"> <SiTwitter/> <p>Twitter</p></a>
							<a href="http://instagram.com/kayode0x" target="_blank" rel="noopener noreferrer"> <SiInstagram/> <p>Instagram</p></a>
						</div>
					</div>
				</div>
			) : (
				<div className="contactDesktop">
					<div className="contact">
						<div className="intro">
						<p className="contactText">Contact</p>
						<p className="subText">
							Send a mail or shoot a text with social media. I'll get back to you within 24hours.
						</p>
						<img src={contactImg} alt="contact"/>
						<div className="contactIcons">
							<a href="mailto:contact@kayode.io"> <SiGmail/> <p>Email</p></a>
							<a href="http://twitter.com/kayode0x" target="_blank" rel="noopener noreferrer"> <SiTwitter/> <p>Twitter</p></a>
							<a href="http://instagram.com/kayode0x" target="_blank" rel="noopener noreferrer"> <SiInstagram/> <p>Instagram</p></a>
						</div>
					</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Contact;
