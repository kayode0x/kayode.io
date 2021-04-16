import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayLists from "./components/About/PlayLists";
import Work from "./components/Work/Work";
import Error from "./components/Error404/Error";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from 'react';

function App() {
	const [activeNav, setActiveNav] = useState(1);
	useEffect(() => {
		const data = localStorage.getItem('activeNav');
		if (data) {
			setActiveNav(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('activeNav', JSON.stringify(activeNav));
	});


  return (
		<Router>
			<NavBar activeNav={activeNav} setActiveNav={setActiveNav} />

			<Switch>
				<Route exact path="/">
					<Home setActiveNav={setActiveNav} />
					<Footer />
				</Route>

				<Route exact path="/about">
					<About />
				</Route>

				<Route exact path="/about/playlists">
					<PlayLists />
				</Route>

				<Route exact path="/work">
					<Work />
				</Route>

				<Route exact path="/contact">
					<Contact />
				</Route>

				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
