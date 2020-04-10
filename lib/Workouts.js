const Workouts = {
  joe: {
    title: 'Joe\'s Circuit #1',
    description: '3 sets: 3 reps each, 1 min of 7s on / 3s off, 1 min rest',
    circuit: [
      // @TODO: These are all going to be repetitive, it'd be nice to have some
      // kind of iterator that could handle nested repetitive sets...
      {mode: 'ready', label: false, duration: false},
      {mode: 'warn', label: 'Ready', duration: 5},

      // 1 x 1
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'rest', label: 'Rest', duration: 60},

      // 1 x 2
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'rest', label: 'Rest', duration: 60},

      // 1 x 3
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},

      {mode: 'rest', label: 'Long Rest', duration: 120},


      // 2 x 1
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'rest', label: 'Rest', duration: 60},

      // 2 x 2
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'rest', label: 'Rest', duration: 60},

      // 2 x 3
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},

      {mode: 'rest', label: 'Long Rest', duration: 120},


      // 3 x 1
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'rest', label: 'Rest', duration: 60},

      // 3 x 2
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'rest', label: 'Rest', duration: 60},

      // 3 x 3
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
      {mode: 'on', label: 'Hang', duration: 7},
      {mode: 'off', label: 'Off', duration: 3},
    ],
  },

  rei: {
    title: 'REI\'s Hangboard Training 101',
    description: '4 sets: 4 reps each 15s hangs 1 min rest.',
    circuit: [
      // @TODO: These are all going to be repetitive, it'd be nice to have some
      // kind of iterator that could handle nested repetitive sets...
      {mode: 'ready', label: false, duration: false},
      {mode: 'warn', label: 'Ready', duration: 5},

      // 1 x 4
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},

      {mode: 'rest', label: 'Long Rest', duration: 300},

      // 2 x 4
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},

      {mode: 'rest', label: 'Long Rest', duration: 300},

      // 3 x 4
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},

      {mode: 'rest', label: 'Long Rest', duration: 300},

      // 4 x 4
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
      {mode: 'rest', label: 'Rest', duration: 60},
      {mode: 'on', label: 'Hang', duration: 15},
    ],
  },

};

export default Workouts;
