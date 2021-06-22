import React, { Component } from "react";
import Main from "./components/Main";

export default class App extends Component {
  state = {
    users: [],
  };

  // state={
  //   name: '',
  //   country: '',
  //   bio: ' ',
  //   brithDay:'',
  //   gender: '',
  //   agree:false,
  //   skills:[]
  // }

  // handleChange=event=>{
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  // handleChackbox=event=>{
  //   this.setState({
  //     agree: event.target.checked
  //   })
  // }
  // handleSkillChange=event=>{
  //   if(event.target.checked){
  //     this.setState({
  //       skills: [...this.state.skills, event.target.value]
  //     })
  //   }else{
  //     const skills=this.state.skills.filter(skill=>skill !== event.target.value)
  //     this.setState({skills})
  //   }
  // };
  creatUser = (user) => {
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  render() {
    // const {name, country, bio, brithDay, agree, skills}=this.state
    return (
      <div style={{ width: "400px", margin: "auto" }}>
        {/* <input className="form-control my-2" value={name}  type="text" name="name" onChange={this.handleChange} placeholder="sn sohag"/>
        <select className="form-control my-2" value={country} onChange={this.handleChange} name="country">
          <option value="Bangladesh"> Bangladesh </option>
          <option value="India"> India </option>
          <option value="srilanka">srilanka  </option>
          <option value="Pakistan">Pakistan  </option>
          <option value="China"> China </option>
        </select>
        <textarea onChange={this.handleChange} value={bio} className="form-control  my-2" name="bio" placeholder="Tell me About Yourself">

        </textarea>
        
        <input className="form-control  my-2" value={brithDay}  onChange={this.handleChange}  type="date" name="birthday"/>
        <div>
          <input type="radio" name="gender" value="Male" onChange={this.handleChange}/> Male
          <input type="radio" name="gender" value="Female" onChange={this.handleChange}/> Female
          <input type="radio" name="gender" value="Others" onChange={this.handleChange}/> Others
        </div>
        <div>
          skills:<br/>
          <input type="checkbox" name="skills" value="java" checked={skills.includes("java")} onChange={this.handleSkillChange} /> java
          <input type="checkbox" name="skills" value="javascript" checked={skills.includes("javascript")} onChange={this.handleSkillChange} /> javascript
          <input type="checkbox" name="skills" value="python" checked={skills.includes("python")} onChange={this.handleSkillChange} /> python
          <input type="checkbox" name="skills" value="HTML" checked={skills.includes("HTML")} onChange={this.handleSkillChange} /> HTML

        </div>

        <div>
          <input type="checkbox" name="agree" checked={agree} onChange={this.handleChackbox}/>
          This is a agree box
        </div>

        <button className="btn btn-primary"  onClick={()=>console.log(this.state)}>Click me</button> */}
        <Main creatUser={this.creatUser}></Main>

        <div>
          <h3 className="my-5">All Registered Users :</h3>
          <ul className="list-group my-5">
            {this.state.users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name} ... {user.email} ... {user.password}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
