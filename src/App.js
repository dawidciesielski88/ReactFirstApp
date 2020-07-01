import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Dawid", age: 32 },
      { name: "Mateusz", age: 28 },
      { name: "Franek", age: 4 },
    ],
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Julek", age: 0 },
        { name: "Emmet", age: "unknown" },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Dawid", age: 32 },
        { name: event.target.value, age: 28 },
        { name: "Franek", age: 4 },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hello There</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Dave")}
        >
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dawidek")}
          changed={this.nameChangedHandler}
        >
          {" "}
          I'm a programmer{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

// with useState hook
// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Dawid", age: 32 },
//       { name: "Mateusz", age: 28 },
//       { name: "Franek", age: 4 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Kamila", age: 29 },
//         { name: "Julek", age: 0 },
//         { name: "Emmet", age: "unknown" },
//       ],
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Hello There</h1>
//       <button onClick={switchNameHandler}>Click me</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         {" "}
//         I'm a programmer{" "}
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
