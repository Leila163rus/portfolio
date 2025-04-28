import {proekt} from './data.js'

'use strict'

const dscrip = document.getElementById('clock');
const pred = document.getElementById('prediction');
const weath = document.getElementById('weather');
const auth = document.getElementById('auth');
const enWord = document.getElementById('enWord');
const words = document.getElementById('words');
const notepad = document.getElementById('notepad');
const user = document.getElementById('user');
const user1 = document.getElementById('user1');
const api = document.getElementById('api');
const product = document.getElementById('product');

putDscrip();

putPred();

getWeath();

putAuth();

putEnWord();

putWords();

putNotepad();

putUser();

putUser1();

putApi();

putProduct();

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

function putEnWord() {
  if (enWord.textContent === '') {
    enWord.textContent = proekt.enWord;
  }
}

function putWords() {
  if (words.textContent === '') {
    words.textContent = proekt.words;
  }
}

function putNotepad() {
  if (notepad.textContent === '') {
    notepad.textContent = proekt.notepad;
  }
}

function putUser() {
  if (user.textContent === '') {
    user.textContent = proekt.user;
  }
}

function putUser1() {
  if (user1.textContent === '') {
    user1.textContent = proekt.user1;
  }
}

function putApi() {
  if (api.textContent === '') {
    api.textContent = proekt.api;
  }
}

function putProduct() {
  if (product.textContent === '') {
    product.textContent = proekt.product;
  }
}
