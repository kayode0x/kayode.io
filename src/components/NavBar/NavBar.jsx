import './NavBar.scss'
import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import { Link } from 'react-router-dom';

const NavBar = ({ activeNav, setActiveNav }) => {
	const matches = useMediaQuery('(max-width: 1023px)');
	const [ showNav, setShowNav ] = useState(null);
	const [ hideNav, setHideNav ] = useState(null);

	//prevent scrolling when the navbar is open
	if (showNav === true) {
		var bodyOpen = document.getElementsByTagName('BODY')[0];
		bodyOpen.style.overflow = 'hidden';
	} else {
		var bodyClose = document.getElementsByTagName('BODY')[0];
		bodyClose.style.overflow = 'auto';
	}

	

	return (
		<>
			{matches ? (
				<div className="navMobile">
					<a href="/">Kayode.</a>
					<div className="navBar">
						<Hamburger
							size={28}
							onToggle={(toggled) => {
								if (toggled) {
									setShowNav(true);
									setHideNav(false);
								} else {
									setHideNav(true);
									setShowNav(false);
								}
							}}
						/>
					</div>
				</div>
			) : (
				<div className="mainNav">
					<div className="navBar">
						<div className="navLogo">
							<a href="/">
								<span>K</span>
								<span>a</span>
								<span>y</span>
								<span>o</span>
								<span>d</span>
								<span>e</span>
								<span>.</span>
							</a>
						</div>
						<div className="navLinks">
							<div className="texts">
								<Link
									onClick={() => setActiveNav(1)}
									className={activeNav === 1 ? 'activeNav' : ''}
									to="/"
								>
									Home
								</Link>
								<Link
									onClick={() => setActiveNav(2)}
									className={activeNav === 2 ? 'activeNav' : ''}
									to="/about"
								>
									About
								</Link>
								<Link
									onClick={() => setActiveNav(3)}
									className={activeNav === 3 ? 'activeNav' : ''}
									to="/work"
								>
									Work
								</Link>
							</div>
							<a onClick={() => setActiveNav(0)} className="contact" href="/contact">
								Contact
							</a>
						</div>
					</div>
				</div>
			)}

			{showNav && (
				<div className="showNavList">
					<div className="texts">
						<a href="/">Home</a>
						<a href="/about">About</a>
						<a href="/work">Work</a>
						<a href="/contact">Contact</a>
					</div>
					<div className="connect">
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
					</div>
				</div>
			)}

			{hideNav && (
				<div className="hideNavList">
					<div className="texts">
						<a href="/">Home</a>
						<a href="/">About</a>
						<a href="/">Work</a>
						<a href="/">Contact</a>
					</div>
					<div className="connect">
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
					</div>
				</div>
			)}
		</>
	);
}

export default NavBar;