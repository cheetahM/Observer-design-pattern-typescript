// Import stylesheets
import './style.css';
import { WeatherStation, TemperatureDisplay, Fan } from './observer';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Observer Design Pattern using TypeScript</h1>`;

const weatherStation = new WeatherStation();

const tempDeisplay = new TemperatureDisplay(weatherStation);

const fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
