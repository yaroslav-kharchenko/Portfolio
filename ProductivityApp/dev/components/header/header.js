import View from './header_view';
import Controller from './header_controller';
import { data } from './header_data';

let header = new Controller(View, data, {title: 'Settings', add: false, remove: false});
header.init();
header.trigger();