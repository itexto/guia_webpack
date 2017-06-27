import _ from 'lodash';

function component() {
  var element = document.createElement('div');


  element.innerHTML = _.join(['Oi', 'Itexto!'], ' ');

  return element;
}

document.body.appendChild(component());
