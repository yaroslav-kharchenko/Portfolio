export let data = {
  title: 'Choose categories',
  tabs: [
    {
      name: 'Pomodoros'
    },
    {
      name: 'Categories'
    }
  ],
  buttons: [
    {
      value: 'Next',
      className: 'next',
      color: 'green',
      size: 'small',
      show: false
    },
    {
      value: 'Back',
      className: 'back',
      color: 'blue',
      size: 'small',
      show: true
    },
    {
      value: 'Save',
      className: 'save',
      color: 'green',
      size: 'small',
      show: true
    }
  ]
};

export let options = [
  {
    id: 1,
    value: 'Work'
  },
  {
    id: 2,
    value: 'Education'
  },
  {
    id: 3,
    value: 'Hobby'
  },
  {
    id: 4,
    value: 'Sport'
  },
  {
    id: 5,
    value: 'Other'
  }
];