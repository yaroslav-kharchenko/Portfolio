// import './cycle-graph-style.css';
import View from './cycle-graph-view';
import Controller from './cycle-graph-controller';

var Graph = new Controller(View,{
  workTimeInput: 'work-time__value',
  shortBreakInput: 'short-break__value',
  workIterationInput: 'work-iteration__value',
  longBreakInput: 'long-break__value',
  controls: 'controls-container'
});

Graph.init();