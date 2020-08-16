"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }
    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Firman",
  lastName: "Mardiyanto",
};

const element = getGreeting(user);

ReactDOM.render(element, document.getElementById("hello_world"));

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);

function getGreeting(user) {
  if (user) return <h1>Halo, {formatName(user)}!</h1>;
  return <h1>Halo, Orang Asing.</h1>;
}

ReactDOM.render(<h1>Hadeuh</h1>, document.getElementById("rootEx"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Halo, {props.name}</h1>;
}

class Welcome2 extends React.Component {
  render() {
    return <h1>Halo, {this.props.name}</h1>;
  }
}

Welcome2.defaultProps = {
  name: "Ujang",
};
const elementWelcome2 = <Welcome2 name="Firman Mardiyanto 33" />;
const elementWelcome = (
  <div>
    <Welcome name="Firman Mardiyanto 1" />
    <Welcome name="Firman Mardiyanto 2" />
    <Welcome name="Firman Mardiyanto 3" />
  </div>
);

ReactDOM.render(elementWelcome, document.getElementById("rootEx"));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({
      date: new Date(),
      counter: state.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Halo, dunia!</h1>
        <h2>Ini {this.state.date.toLocaleTimeString()}.</h2>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("clock"));

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('threeClock')
);
