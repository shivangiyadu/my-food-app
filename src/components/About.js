import React from 'react';
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';
/*
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is About Page</h2>
      <User name={"shivangi yadav"}/>

  <UserClass name={"OJAS YADAV "}/>
    </div>
  );
};

export default About;
*/


class About extends React.Component{
    constructor(props){
        super(props); 
    }
    render()
    {
        return (
            <div>
                <h1>About Class Component</h1>
                
                <div>
                  LoggedIn User
                    <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="text-xl"> {loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2> This is Namaste React web Series</h2>
                <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"} />
            </div>

        );
    }
}
export default About;