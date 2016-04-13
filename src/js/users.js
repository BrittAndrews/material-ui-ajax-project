import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { render } from 'react-DOM';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import PersonIcon from 'material-ui/lib/svg-icons/social/person';



export default class Users extends Component {


	render(){

			


		return(

			<div className="paper-flex-wrapper">
    		<Paper className="style" zDepth={5}>

    		<List Subheader="GitHub Homies">


    			<Link to="/jisaacks/orgs">
      			<ListItem
        		 primaryText="jisaacks"
       			 rightIcon={<PersonIcon />}
     			/>
     			</Link>

     			<Link to="/sindresorhus/orgs">
     			<ListItem
        		 primaryText="sindresorhus"
        		 rightIcon={<PersonIcon />}
     			/>
     			</Link>

     			<Link to="/addyosmani/orgs">
     			<ListItem
        		 primaryText="addyosmani"
        		 rightIcon={<PersonIcon />}
     			/>
     			</Link>

     			<Link to="/wycats/orgs">
     			<ListItem
        		 primaryText="wycats"
        		 rightIcon={<PersonIcon />}
     			/>
     			</Link>

     			<Link to="/dhh/orgs">
     			<ListItem
        		 primaryText="dhh"
        		 rightIcon={<PersonIcon />}
     			/>
     			</Link>

   			
   			</List>
     		</Paper>
     		</div>


			);
	}
}
