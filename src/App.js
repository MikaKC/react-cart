import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css';
import React, {Component} from 'react'

//Main application :0
class App extends Component {
  
  constructor() {
    super();
    console.log('App - Constructor!');
    //this.state = this.props.something... <- props in constructor;
  }

  componentDidMount() 
  {
    //this is good for doing ajax calls because ajax calls cool
    console.log('App - Mounted!');
  }

  render() {

    console.log('App - Rendered!');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }

  state = { 
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  };


  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  };

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });

      this.setState({counters});
  };
}

  export default App;
