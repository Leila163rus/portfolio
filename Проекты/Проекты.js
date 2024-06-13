import {proekt} from './data.js'

'use strict'

const dscrip = document.getElementById('clock');
const pred = document.getElementById('prediction');
const weath = document.getElementById('weather')

putDscrip();

putPred();

getWeath();

function putDscrip() {
  if (dscrip.textContent === '') {
    dscrip.textContent = proekt.clock;
  }
}

function putPred() {
  if (pred.textContent === '') {
    pred.textContent = proekt.prediction;
  }
}

function getWeath() {
  if (weath.textContent === '') {
    weath.textContent = proekt.weather;
    console.log(weath.textContent);
  }
}




