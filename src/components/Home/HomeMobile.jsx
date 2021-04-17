import './HomeMobile.scss';

const HomeMobile = ({ heroIndex, handleHeroChange }) => {
	return (
		<div className="homepageMobile">
			<img
				src={require(`../assets/hero${heroIndex}.png`).default}
				alt="Kayode memoji"
				onClick={handleHeroChange}
			/>
			<h3>
				Hey there, I'm <br /> <span>Kayode Ogunmakinwa.</span>
			</h3>
			<p>
				A Computer Science student #IUPUI23 & Full-Stack Developer. I enjoy bringing ideas to life by building things
				that run on computers.
			</p>

			<a className="browse" href="/about">
				Explore
			</a>
		</div>
	);
};

export default HomeMobile;
