import Router from 'react-auth-kit/route';

import {useNavigate as useReactRouteNavigate, redirect, useLocation} from 'react-router';

const ReactRouterPlugin: Router = {
  navigate: function({to}: { to: string; }): void {
    redirect(to);
  },
  useNavigate: function(): ({to}: { to: string; }) => void {
    const navigate = useReactRouteNavigate();
    return ({to}: { to: string; }) => navigate(to);
  },
  usePath: function(): () => string {
    const location = useLocation();
    return () => location.pathname; 
  }
};

export default ReactRouterPlugin;
