import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>Welcome to the world About</h1>
        {/* <User name={"Rizwan khan is the Function "} location={"Bangalore fuactional"} /> */}
        <UserClass name={"Rizwan khan is in the Class"} location={"Banglore in class"}/>
        
      </div>
    );
  }
}

export default About;
