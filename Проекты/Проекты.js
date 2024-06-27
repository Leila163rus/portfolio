import {proekt} from './data.js'

'use strict'

const dscrip = document.getElementById('clock');
const pred = document.getElementById('prediction');
const weath = document.getElementById('weather')
const auth = document.getElementById('auth')

putDscrip();

putPred();

getWeath();

putAuth();

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
  }
}

function putAuth() {
  if (auth.textContent === '') {
    auth.textContent = proekt.auth;
  }
}




