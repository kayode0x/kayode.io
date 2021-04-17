import './About.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiSass, SiMaterialUi, SiNetlify } from 'react-icons/si';
import { SiGithub, SiPostman } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi';

const About = ( ) => {
    const matches = useMediaQuery('(max-width: 1023px)');

    return (
		<>
			{matches ? (
				<div id="aboutMobile">
					<div className="intro">
						<p className="aboutText">About</p>
						<p className="subText">
							I'm a Full-Stack developer, passionate about bringing ideas to life by building websites and
							mobile apps. You can view some of my works <a href="/work">here.</a>
						</p>
						<p className="subText2">
							I'm currently shaping my skills on React Native, node.js and I'm open to contracts,
							part-time roles and internships.
						</p>
						<div className="subText3">
							<p className="skills">Skills</p>
							For my day to day activities, I use:
							<ul>
								<li>
									JavaScript, ES6 <SiJavascript />
								</li>
								<li>
									React Js, JSX <SiReact />
								</li>
								<li>
									HTML 5 <SiHtml5 />
								</li>
								<li>
									CSS 3 <SiCss3 />
								</li>
								<li>
									SASS - SCSS <SiSass />
								</li>
								<li>
									Material UI <SiMaterialUi />
								</li>
								<li>
									Netlify <SiNetlify />
								</li>
							</ul>
							I'm also Familiar with:
							<ul>
								<li>
									React Native <SiReact />
								</li>
								<li>
									Git - Github <SiGithub />
								</li>
								<li>
									Postman <SiPostman />
								</li>
							</ul>
							I also write codes in Python and C++
						</div>

						<div className="body">
							<p className="misc">Misc</p>
							<p className="bodyText">
								Aside programming, I enjoy playing football (soccer), and a huge fan of FC Barcelona
								❤️💙, Messi 🐐.
							</p>
							<p className="bodyText2">
								I also enjoy listening to various genres of music and I have some Apple Music Playlists
								you mights also like.
							</p>
							<a href="/about/playlists">
								<span>Playlists</span> <BiLinkExternal />{' '}
							</a>
						</div>
					</div>
				</div>
			) : (
				<div id="aboutDesktop">
					<div className="intro">
						<p className="aboutText">About</p>
						<p className="subText">
							I'm a Full-Stack developer, passionate about bringing ideas to life by building websites and
							mobile apps. You can view some of my works <a href="/work">here.</a>
						</p>
						<p className="subText2">
							I'm currently shaping my skills on React Native, node.js and I'm open to contracts,
							part-time roles and internships.
						</p>
						<div className="subText3">
							<p className="skills">Skills</p>
							For my day to day activities, I use:
							<div className="skillsList">
								<ul>
									<li>
										JavaScript, ES6 <SiJavascript />
									</li>
									<li>
										React Js, JSX <SiReact />
									</li>
									<li>
										HTML 5 <SiHtml5 />
									</li>
									<li>
										CSS 3 <SiCss3 />
									</li>
								</ul>
								<ul>
									<li>
										SASS - SCSS <SiSass />
									</li>
									<li>
										Material UI <SiMaterialUi />
									</li>
									<li>
										Netlify <SiNetlify />
									</li>
								</ul>
							</div>
							I'm also Familiar with:
							<div id="otherSkills">
								<ul>
									<li>
										React Native <SiReact />
									</li>
									<li>
										Git - Github <SiGithub />
									</li>
									<li>
										Postman <SiPostman />
									</li>
								</ul>
							</div>
							I also write codes in Python and C++
						</div>

						<div className="body">
							<p className="misc">Misc</p>
							<p className="bodyText">
								Aside programming, I enjoy playing football (soccer). I'm a fan of FC Barcelona ❤️💙,
								Messi 🐐.
							</p>
							<p className="bodyText2">
								I also enjoy listening to various genres of music and I have some Apple Music Playlists
								you mights also like.
							</p>
							<a href="/about/playlists">
								<span>Playlists</span> <BiLinkExternal />{' '}
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default About;