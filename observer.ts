interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

// Subject
export class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log(`WeatherStation: new temperature measurement: ${temp}`);
    this.temperature = temp;
    this.notifyObservers();
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  public notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.temperature));
  }
}

// observer
export class TemperatureDisplay implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    console.log(`Temperature is updated to: ${temperature}`);
  }
}

export class Fan implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    if (temperature > 25) {
      console.log(`IT's hot, turn the Fan on.`);
    } else {
      console.log(`No need of Fan as its cold.`);
    }
  }
}
