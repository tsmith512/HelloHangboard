import Workouts from './Workouts';

export default class CircuitHandler {
  constructor(workoutID, updateCallback) {
    this.step = false;
    this.timeToNext = false;
    this.mode = false;
    this.interval = false;
    this.updateCallback = updateCallback;
    this.workout = Workouts[workoutID];

    // @TODO: We do need to be able to show a progress meter, but I think the
    // Workouts library should be able to figure this out, I think processing
    // the contents of a circuit should belong to that class, not this one that
    // just facilitates walking it?
    this.totalSteps = this.workout.circuit.length;

    // @TODO: This would get the number of "on" steps, but then how do we know
    // which of those is active to show progress through it.
    // this.totalSteps = this.workout.circuit.filter(step => (step.mode == 'on')).length;

    this._setStep(0);
  }

  start = () => {
    clearInterval(this.interval);
    this._setStep(1);
    this.interval = setInterval(this._beat, 1000);
  }

  stop = () => {
    clearInterval(this.interval);
    this._setStep(0);
  }

  isWaiting = () => {
    return this.timeToNext === false;
  }

  _getStep = () => {
    return this.workout.circuit[this.step];
  }

  _setStep = (index) => {
    this.step = index;
    const nextStep = this._getStep();
    this.timeToNext = nextStep.duration;
    this.mode = nextStep.mode;
    this._dispatchUpdate('new step');
  }

  _beat = () => {
    if (this.timeToNext === false) {
      // We're waiting on user interaction here.
      // @TODO: Return? Just wait? Do we have an action here?
    }
    else if (this.timeToNext === 0) {
      this._setStep((this.step + 1) % this.workout.circuit.length)
    }
    else {
      this.timeToNext--;
      this._dispatchUpdate('countdown');
    }
  }

  _dispatchUpdate = (name) => {
    this.updateCallback(name, {
      remaining: this.timeToNext,
      progress: [this.step, this.totalSteps],
      step: this._getStep()
    });
  }
}
