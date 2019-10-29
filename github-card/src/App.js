import React, { Component} from 'react';
import './App.css';
import CardList from './Components/CardsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users:{},
      followers: []
    }
  }
  componentDidUpdate() {

  }
  componentDidMount(){
    fetch("https://api.github.com/users/ruwaidah")
      .then(resp => resp.json())
      .then(resp => this.setState({users: resp})
          )
    
    fetch("https://api.github.com/users/ruwaidah/followers")
      .then(resp => resp.json())
      .then(resp => this.setState({ followers: resp}))
  }
  render() {

   console.log(this.state.users)
   console.log(this.state.followers)


  return (
    <div className="App">
      <CardList data = {this.state.users} followers = {this.state.followers} />
    </div>
  );
}

}

export default App;
