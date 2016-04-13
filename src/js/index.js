import React from 'react';
import { render } from 'react-DOM';
import { Router, Route, hasHistory, Link } from 'react-router';
import { ajax } from 'jquery';
import NProgress from 'react-nprogress';
import Users from 'users';
import UserOrgs from './user_orgs';

render(
	<Router>
	<Route path="/" component={Users} />
	<Route path="/:user_name/orgs" component={UserOrgs} />
	</Router>,
	document.querySelector('.app')

	)