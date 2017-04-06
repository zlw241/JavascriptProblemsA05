class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this._tick();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour % 12}:${this.minute % 60}:${this.second % 60}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    global.setInterval(() => {
      this.second++;
      if (this.second === 60) {
        this.minute++;
      }
      if (this.minute === 60) {
        this.hour++;
      }
      this.printTime();
    }, 1000);
  }
}

// const clock = new Clock();

function addNumbers(sum, numsLeft, completionCallback) {

}

let clock = new Clock();
