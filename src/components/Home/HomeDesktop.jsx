import './HomeDesktop.scss';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';

const HomeDesktop = ({ heroIndex, handleHeroChange }) => {
	return (
		<div className="mainHome">
			<div className="home">
				<img
					src={require(`../assets/hero${heroIndex}.png`).default}
					alt="Kayode memoji"
					onClick={handleHeroChange}
				/>
				<div className="intro">
					<p className="mainText">
						Hey there, I'm <br /> <span>Kayode Ogunmakinwa.</span>
					</p>
					<p className="subText">
						A Computer Science student #IUPUI23 & Full-Stack Developer. I enjoy bringing ideas to life by
						building things that run on computers.
					</p>

					<div className="buttons">
						<a 
							className="browse" 
							href="/about">
							Explore
						</a>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeDesktop;
