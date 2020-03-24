const Workouts = {
  joe: {
    title: 'Joe\'s Circuit #1',
    description: 'Nine sets of six 7s hangs with rests between.',
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
  },

  rei: {
    title: 'REI\'s Hangboard Training 101',
    description: 'Four sets of four 15s hangs with long rests.',
    circuit: [
      // @TODO: These are all going to be repetitive, it'd be nice to have some
      // kind of iterator that could handle nested repetitive sets...
      {mode: 'ready', duration: false},
      {mode: 'warn', duration: 5},

      // 1 x 4
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},

      {mode: 'rest', duration: 300},

      // 2 x 4
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},

      {mode: 'rest', duration: 300},

      // 3 x 4
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},

      {mode: 'rest', duration: 300},

      // 4 x 4
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
      {mode: 'rest', duration: 60},
      {mode: 'on', duration: 15},
    ],
  },

};

export default Workouts;
