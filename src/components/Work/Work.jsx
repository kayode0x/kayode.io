import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import './Work.scss';

const Work = () => {
	return (
		<div id="work">
			<p className="introTxt">Selected projects</p>
			<div className="projects">
				<div className="project">
					<a href="https://apexwallet.app/" target="_blank" rel="noopener noreferrer">
						Apexwallet
					</a>
					<p className="projectTool">React, Nodejs, MongoDB, Netlify, SASS...</p>
					<p className="projectInfo">
						A full stack webapp that simulates basically anything you can do with a real crypto wallet.
					</p>
					<div className="projectIcons">
						<a href="https://apexwallet.app/" target="_blank" rel="noopener noreferrer">
							<BiLinkExternal />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://github.com/kayode0x/Mini-Blog" target="_blank" rel="noopener noreferrer">
						Mini-Blog
					</a>
					<p className="projectTool">React, SASS</p>
					<p className="projectInfo">
						A Lightweight Blogging Platform, built with React and SASS. It also uses a mock API to server
						data.
					</p>
					<div className="projectIcons">
						<a href="https://github.com/kayode0x/Mini-Blog" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://github.com/kayode0x/RockPaperScissors" target="_blank" rel="noopener noreferrer">
						Rock Paper Scissors
					</a>
					<p className="projectTool">HTML, CSS and JavaScript</p>
					<p className="projectInfo">Play Rock Paper Scissors on the web vs a computer.</p>
					<div className="projectIcons">
						<a
							href="https://kayode0x.github.io/RockPaperScissors/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLinkExternal />
						</a>
						<a
							href="https://github.com/kayode0x/RockPaperScissors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://twitter.com/twotebot" target="_blank" rel="noopener noreferrer">
						TwoteBot
					</a>
					<p className="projectTool">Python, Heroku</p>
					<p className="projectInfo">A twitter bot that handles wikipedia and dictionary search requests. </p>
					<div className="projectIcons">
						<a href="https://twitter.com/twotebot" target="_blank" rel="noopener noreferrer">
							<BiLinkExternal />
						</a>
						<a href="https://github.com/kayode0x/TwoteBot" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://github-finder-0x.netlify.app/" target="_blank" rel="noopener noreferrer">
						GitHub-Finder
					</a>
					<p className="projectTool">HTML, CSS and JavaScript</p>
					<p className="projectInfo">
						Find github users, display their repositories with additional information on each repository.
					</p>
					<div className="projectIcons">
						<a href="https://github-finder-0x.netlify.app/" target="_blank" rel="noopener noreferrer">
							<BiLinkExternal />
						</a>
						<a href="https://github.com/kayode0x/GitHub-Finder" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://kayode0x.github.io/Chuck-Norris-Jokes/" target="_blank" rel="noopener noreferrer">
						Chuck-Norris-Jokes
					</a>
					<p className="projectTool">HTML, CSS and JavaScript</p>
					<p className="projectInfo">
						Enter the number of jokes you want and it will display the amount requested.
					</p>
					<div className="projectIcons">
						<a
							href="https://kayode0x.github.io/Chuck-Norris-Jokes/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLinkExternal />
						</a>
						<a
							href="https://github.com/kayode0x/Chuck-Norris-Jokes"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
					</div>
				</div>
			</div>
			<p className="otherProject">
				You can also find some other projects{' '}
				<a href="https://github.com/kayode0x?tab=repositories" target="_blank" rel="noopener noreferrer">
					here
				</a>
			</p>
		</div>
	);
};

export default Work;
