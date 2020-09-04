import NotFound from '../Component/NotFounnd';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/about',
		exact: true,
		component: Search,
	},
	{
		component: NotFound,
	},
];

export default routes;
