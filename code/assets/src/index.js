import _ from 'lodash';
import './estilo.css'
import Imagem from './imagem.png'

function component() {
  var element = document.createElement('div');


  element.innerHTML = _.join(['Oi', 'Itexto!'], ' ');

  return element;
}

document.body.appendChild(component());
