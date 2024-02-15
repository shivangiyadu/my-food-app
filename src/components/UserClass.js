import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={
           userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"https://dummy-photo"
           },       
        };  
    };
    async componentDidMount(){
           const data=await fetch("https://api.github.com/users/shivangiyadu");
           const json=await data.json();
            this.setState({
             userInfo:json,
          });

           console.log(json);
     }

    render(){
        const{name,location,avatar_url}=this.state.userInfo;

        console.log("Child Render");

        return <div className="user-card">
        
        <img src={avatar_url}/>
          <h2>Name:{this.state.userInfo.name}</h2>
          <h3>LOcation:{location}</h3>
          <h4>Contact:Shivangi.yadu</h4>
          </div>
    
    }
}
export default UserClass;