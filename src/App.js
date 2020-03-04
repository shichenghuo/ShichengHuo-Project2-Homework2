import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        What is your name?
        <br />
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
        <br />
        <br />
        What is your birthday?
        <br />
        <br />
        <input
          type="date"
          value={getData("birthday")}
          onChange={event => setData("birthday", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "welcome" }]
  },
  welcome: {
    content: (getData, setData) => (
      <p>
        Welcome, {getData("name")}! Who you want to travel with?
        <br />
        <br />
        <input
          type="text"
          value={getData("people")}
          onChange={event => setData("people", event.target.value)}
        />
        <br />
        <br />
        at what time(tips: a holiday)?
        <br />
        <br />
        <input
          type="text"
          value={getData("time")}
          onChange={event => setData("time", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "next", page: "adj" }]
  },
  adj: {
    content: (getData, setData) => (
      <p>
        In what transportation you want?
        <br />
        <br />
        <input
          type="text"
          value={getData("transportation")}
          onChange={event => setData("transportation", event.target.value)}
        />
        <br />
        <br />
        How the trip feels?
        <br />
        <br />
        <input
          type="text"
          value={getData("feeling")}
          onChange={event => setData("feeling", event.target.value)}
        />
        <br />
        <br />
        What is the food you have?
        <br />
        <br />
        <input
          type="text"
          value={getData("food")}
          onChange={event => setData("food", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "next", page: "words" }]
  },
  words: {
    content: (getData, setData) => (
      <p>
        Verb in .ing
        <br />
        <br />
        <input
          type="text"
          value={getData("v")}
          onChange={event => setData("v", event.target.value)}
        />
        <br />
        <br />
        adjective
        <br />
        <br />
        <input
          type="text"
          value={getData("ad")}
          onChange={event => setData("ad", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "generate", page: "paragraph" }]
  },
  paragraph: {
    content: (getData, setData) => (
      <p>
        In a <span className="colorchanged"> {getData("ad")} </span> day! You
        went on{" "}
        <span className="colorchanged"> {getData("transportation")} </span> with{" "}
        <span className="colorchanged"> {getData("people")} </span> on{" "}
        <span className="colorchanged"> {getData("time")} </span>. You both had{" "}
        <span className="colorchanged"> {getData("food")} </span>
        for lunch. You said to{" "}
        <span className="colorchanged"> {getData("people")} </span>:"It is a{" "}
        <span className="colorchanged"> {getData("feeling")} </span>
        trip." and <span className="colorchanged">
          {" "}
          {getData("people")}{" "}
        </span>{" "}
        is <span className="colorchanged"> {getData("v")} </span>. You feel{" "}
        <span className="colorchanged"> {getData("ad")} </span>.
      </p>
    ),
    buttons: [{ label: "play again", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: "",
      birthday: "",
      time: "",
      people: "",
      v: "",
      ad: "",
      transportation: "",
      feeling: "",
      food: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName],
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
