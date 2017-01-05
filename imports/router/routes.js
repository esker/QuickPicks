import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import EmailPasswordForm from '../ui/components/forms/EmailPasswordForm.jsx';

const routes = [
  {
    path: '/',
    component: EmailPasswordForm
  },
  {
    path: '/about',
    component: About
  }, {
    path: '*',
    component: NotFound
  }
];

export default routes;
