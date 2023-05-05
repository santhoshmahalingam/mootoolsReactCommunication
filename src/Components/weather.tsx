import React, { Component } from "react";

interface IWeatherState {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  cityList: string[];
  API_KEY: string
}

interface IWeatherProps {}

class Weather extends Component<IWeatherProps, IWeatherState> {
  constructor(props: IWeatherProps) {
    super(props);
    this.state = {
      city: "Toronto",
      temperature: 0,
      description: "",
      cityList: ["Toronto", "Vancouver", "Montreal"],
      icon: "",
      API_KEY: "994ebbfff6ce64c926aef39ed47691cf"
    };
  }

  componentDidMount() {    
    this.getData(this.state.city)
  }

  getData(item :string) {
    const city = item;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.API_KEY}&units=metric`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      });
  }

  render() {
    const { city, temperature, description, icon } = this.state;

    return (
      <div className="reactContainer">
        <a  data-testid={'rootLink'} className="items" href="/communication">{`Commute React<>Mootolls`}</a>
        <div className="weatherWrapper">
        {this.state.cityList.map((item, index) => (
          <div className={`cityTab ${this.state.city===item ? "selected" : "none"}`} key={`city-${index}`} onClick={()=>this.getData(item)}>{item}</div>
        ))}
        </div>
        <WeatherList
          city={city}
          temperature={temperature}
          description={description}
          icon={icon}
        />
      </div>
    );
  }
}

const WeatherList = (props: {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}) => {
  const { city, temperature, description, icon } = props;
  return (
    <>
      <h1>Current Weather in {city}</h1>
      <h2>{temperature}°C</h2>
      <h3>{description}</h3>
      <img
        className={`forecastImage`}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weatherIcon"
      />
    </>
  );
};

export default Weather;
