export let data = {
  mask: 'login',
  logo: {
    src: './assets/img/Logo_1.svg',
    text: 'Pomodoro Productivity Tracker'
  },
  inputs: [
    {
      name: 'username',
      type: 'email',
      icon: 'login',
      placeholder: 'Username',
      invalidMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'password',
      type: 'password',
      icon: 'password',
      placeholder: 'Password',
      invalidMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ]
};