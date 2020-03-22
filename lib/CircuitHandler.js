// @TODO: What's the new syntax for this line?
const EventEmitter = require('events');

export default class CircuitHandler {
  // @TODO: On construction, need to take a Workout as an argument and set it up
  // Meanwhile, we'll use static placeholder:
  workout = {
    // @TODO / WIP: Legitimately a terrible way to do this! Also this should not
    // be a state since the workout is a constant.
    circuit: [
      // {mode: 'ready', duration: false}, // @TODO: Let's make "false" be a manual button
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'rest', duration: 60}
    ],
  };

  constructor(props) {
    this.events = new EventEmitter();
    this.step = false;
    this.timeToNext = false;
    this.mode = false;
    this.interval = false;
  }

  start() {
    clearInterval(this.interval);
    this._setStep(0);
    this.interval = setInterval(() => _beat, 1000);
  }

  _getStep() {
    return this.workout.circuit[this.step];
  }

  _setStep(index) {
    this.step = index;
    const nextStep = this._getStep();
    this.timeToNext = nextStep.duration;
    this.mode = nextStep.mode;
  }

  _beat() {
    if (this.timeToNext == 0) {
      this._setStep((this.step + 1) % this.workout.circuit.length)
      this.events.emit('new step', {remaining: this.timeToNext, step: this._getStep()});
    }
    else {
      this.timeToNext--;
      this.events.emit('countdown', {remaining: this.timeToNext, step: this._getStep()});
    }
  }
}
