import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { render } from 'react-DOM';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';
import DeviceHub from 'material-ui/lib/svg-icons/hardware/device-hub';



export default class UserOrgs extends Component {

	constructor(...props) {

   		super(...props);
  		this.state = { orgs: [] };
 	}


	componentWillMount(){
		let { user_name } = this.props.params;

		ajax(`https://api.github.com/users/${user_name}/orgs`)
			.then(orgs => {
				this.setState({orgs});
		})
	}


	getOrg(org) {
		return (
			<ListItem
				 key={org.id}
        		 primaryText={`${org.login}`}
        		 leftAvatar={<Avatar src={`${org.avatar_url}`} />}
        		 rightIcon={<DeviceHub />}
     			/>
     	)

	 }


	render(){

		let { orgs } = this.state;
		

		return(
				<div className="paper-flex-wrapper">
				<Paper className="style" zDepth={5}>
			    <List Subheader="GitHub Orgs">

      			{ orgs.map(::this.getOrg) }

   				</List>
   				</Paper>
   				</div>

			);
	}
}