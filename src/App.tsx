import React, { Component } from "react";
import Weather from "./Components/weather";
import "./App.css";

interface MyCustomEvent extends Event {
  detail: {
    message: string;
  };
}
interface IState {
  mooToolsMessage?: string;
}
interface Props {}
class App extends Component<Props, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      mooToolsMessage: "",
    };
  }
  handleClick = () => {
    const myCustomEvent = new CustomEvent("reactEvent", {
      detail: {
        message: "React speaking to MooTools",
      },
    });

    window.dispatchEvent(myCustomEvent);
  };

  componentDidMount() {
    window.addEventListener("mootoolsEvent", (event: any) => {
      console.log(event?.detail);
      this.setState({ mooToolsMessage: event?.detail?.message || "Text" });
    });
  }

  componentWillUnmount() {
    // window.removeEventListener('mootoolsEvent', this.handleCustomEvent);
  }

  handleCustomEvent = (event: MyCustomEvent) => {
    const { detail } = event;
    console.log(detail?.message);
  };

  render() {
    return (
      <div className="reactContainer">
        <div className="navLinkButton">
          <button data-testid={'eventButton'} className="items" onClick={this.handleClick}>Dispatch Custom Event</button>
          <a data-testid={'weatherLink'} className="items" href="/weather">Weather Forecast</a>
        </div>
        <div>
          <div data-testid={'mooToolsMessage'}>Mootools Message : {this.state.mooToolsMessage}</div>
        </div>
      </div>
    );
  }
}

export default App;
