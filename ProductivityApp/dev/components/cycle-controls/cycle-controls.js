import './cycle-controls_style.css';
import View from './cycle-controls-view';
import Controller from './cycle-controls-controller';
import { data } from './cycle-controls-data';

let container = document.getElementsByClassName('options-section')[0];

let cycleControls = new Controller(View, data, container);
cycleControls.init();