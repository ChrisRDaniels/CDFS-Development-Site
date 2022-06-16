import quotegen from '../assets/Quote-Generator.png';
import netflix from '../assets/Netflix-Clone.png';
import crudapp from '../assets/Crud-App.png';

const ProjectCardData = [
	{
		imgsrc: quotegen,
		title: 'JS Quote Generator',
		text: 'A random quote generator app that I created with javascript.',
		view: 'https://quote-generator-js.vercel.app/',
		source: 'https://github.com/ChrisRDaniels/Quote-Generator-JS'
	},
	{
		imgsrc: netflix,
		title: 'Netflix Clone',
		text: 'A netflix clone that was created with React, it uses Axios API calls as well.',
		view: 'https://netflix-clone-react-js-sandy.vercel.app/',
		source: 'https://github.com/ChrisRDaniels/Netflix-Clone-React-JS'
	},
	{
		imgsrc: crudapp,
		title: 'React CRUD Application',
		text: 'A basic CRUD App created with React hooks.',
		view: 'https://crud-react-app.vercel.app/',
		source: 'https://github.com/ChrisRDaniels/CRUD-React-App'
	}
];

export default ProjectCardData;
