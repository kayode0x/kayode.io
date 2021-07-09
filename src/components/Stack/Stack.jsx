import './Stack.scss';
import react from '../../assets/logos/react.png';
import node from '../../assets/logos/node.png';
import postman from '../../assets/logos/postman.png';
import sass from '../../assets/logos/sass.png';
import github from '../../assets/logos/github.png';
import netlify from '../../assets/logos/netlify.png';
import typescript from '../../assets/logos/typescript.png';
import mongodb from '../../assets/logos/mongodb.png';
import javascript from '../../assets/logos/javascript.png';
import cpp from '../../assets/logos/cpp.png';
import python from '../../assets/logos/python.png';
import aws from '../../assets/logos/aws.png';
import ocean from '../../assets/logos/ocean.png';
import adobe from '../../assets/logos/adobe.png';

const Stack = () => {
	const images = [
		javascript,
		typescript,
		react,
		node,
		github,
		netlify,
		sass,
		postman,
		mongodb,
		aws,
		ocean,
		python,
		cpp,
		adobe,
	];

	return (
		<div id="stack">
			<p className="header">Technologies</p>
			<div className="images">
				{images.map((image, index) => (
					<img key={index} src={image} alt="technologies" />
				))}
			</div>
		</div>
	);
};

export default Stack;
