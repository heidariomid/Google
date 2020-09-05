import NotFound from '../Component/NotFounnd';
import Home from '../Pages/Home';
import SearchPage from '../Component/SearchPage/SearchPage';
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/search',
		exact: true,
		component: SearchPage,
	},
	{
		component: NotFound,
	},
];

export default routes;
