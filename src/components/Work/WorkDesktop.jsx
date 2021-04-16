import './WorkDesktop.scss';
import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';

const WorkDesktop = () => {
    return (
		<div className="workDesktop">
			<div className="work">
				<div className="intro">
					<p className="workText">Work</p>
					<ul>
						<li>
							<p className="listText">
								I'm currently building <a href="#landlord-intentionally-left-blank">Landlord</a>, and as
								the only tech inclined person on the team, I'm overseeing both the front and back ends.
							</p>
						</li>
						<li>
							<p className="listText">
								I'm also working on{' '}
								<a
									href="https://currency-exchange-0x.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Xchange
								</a>
								, a website that allows people convert between 160 currencies. You can get the source
								code{' '}
								<a
									href="https://github.com/kayode0x/Xchange-currency-converter"
									target="_blank"
									rel="noopener noreferrer"
								>
									here
								</a>
								.
							</p>
						</li>
					</ul>
				</div>
				<div className="body">
					<p className="selectedProjects">Selected projects</p>
					<div className="projects">
						<div id="oneDiv">
							<div className="project">
								<a
									href="https://github.com/kayode0x/RockPaperScissors"
									target="_blank"
									rel="noopener noreferrer"
								>
									Rock Paper Scissors
								</a>
								<p className="projectTool">HTML, CSS and Vanilla JavaScript</p>
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
								<a
									href="https://github-finder-0x.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub-Finder
								</a>
								<p className="projectTool">HTML, CSS and Vanilla JavaScript</p>
								<p className="projectInfo">
									This Web App helps you find users then display their profile and repositories.
								</p>
								<div className="projectIcons">
									<a
										href="https://github-finder-0x.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<BiLinkExternal />
									</a>
									<a
										href="https://github.com/kayode0x/GitHub-Finder"
										target="_blank"
										rel="noopener noreferrer"
									>
										<SiGithub />
									</a>
								</div>
							</div>
						</div>
						<div id="twoDiv">
							<div className="project">
								<a href="https://twitter.com/twotebot" target="_blank" rel="noopener noreferrer">
									TwoteBot
								</a>
								<p className="projectTool">Python</p>
								<p className="projectInfo">
									A twitter bot that handles wikipedia and dictionary requests.
								</p>
								<div className="projectIcons">
									<a href="https://twitter.com/twotebot" target="_blank" rel="noopener noreferrer">
										<BiLinkExternal />
									</a>
									<a
										href="https://github.com/kayode0x/TwoteBot"
										target="_blank"
										rel="noopener noreferrer"
									>
										<SiGithub />
									</a>
								</div>
							</div>
							<div className="project">
								<a
									href="https://kayode0x.github.io/Chuck-Norris-Jokes/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Chuck-Norris-Jokes
								</a>
								<p className="projectTool">HTML, CSS and Vanilla JavaScript</p>
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
					</div>
					<p className="otherProject">
						You can also find some other projects{' '}
						<a
							href="https://github.com/kayode0x?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default WorkDesktop;