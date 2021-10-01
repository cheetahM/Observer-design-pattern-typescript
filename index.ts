// Import stylesheets
import './style.css';
import { WeatherStation, TemperatureDisplay, Fan } from './observer';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Observer Design Pattern using TypeScript</h1>`;

let weatherStation = new WeatherStation();

let tempDeisplay = new TemperatureDisplay(weatherStation);

let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
