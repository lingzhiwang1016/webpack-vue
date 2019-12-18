import Print from './print';
// import _ from 'lodash';
// import './style.css';
// import '../build/server/serverWork.js';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的，"-",通过webpack里定义了
    element.innerHTML = _.join(['Hello', '33333333'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}

  document.body.appendChild(component());