const Workouts = {
  joe: {
    // @TODO / WIP: Legitimately a terrible way to do this! Also this should not
    // be a state since the workout is a constant.
    title: 'Joe\'s Circuit #1',
    description: 'Nine sets of 6 x 7 seconds dead hang, 3 seconds off, with rests between.',
    circuit: [
      // @TODO: These are all going to be repetitive, it'd be nice to have some
      // kind of iterator that could handle nested repetitive sets...
      {mode: 'ready', duration: false},
      {mode: 'warn', duration: 5},

      // 1 x 1
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
      {mode: 'rest', duration: 60},

      // 1 x 2
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
      {mode: 'rest', duration: 60},

      // 1 x 3
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

      {mode: 'rest', duration: 120},


      // 2 x 1
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
      {mode: 'rest', duration: 60},

      // 2 x 2
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
      {mode: 'rest', duration: 60},

      // 2 x 3
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

      {mode: 'rest', duration: 120},


      // 3 x 1
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
      {mode: 'rest', duration: 60},

      // 3 x 2
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
      {mode: 'rest', duration: 60},

      // 3 x 3
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
    ],
  }
};

export default Workouts;
