import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "demo",
        location: "demo1",
      },
    };
    // console.log( this.props.name +" Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");
    const data = await fetch("https://api.github.com/users/newrizwankhan");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url, html_url } = this.state.userInfo;

    // console.log(this.props.name +"Child Render");
    return (
      <div className="p-3 pl-5 m-5 shadow-2xl cursor-pointer bg-white w-[300px] h-[400px] rounded-xl">
        <img className="rounded-full" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <Link>
          <h4 hrefLang={html_url}>GitHub Link: {name}</h4>
        </Link>
        <h4>Contact:@rizwankhan34570</h4>
      </div>
    );
  }
}

export default UserClass;
