import {proekt} from './data.js'

'use strict'

const dscrip = document.getElementById('clock');
const pred = document.getElementById('prediction');
const weath = document.getElementById('weather');
const auth = document.getElementById('auth');
const enWord = document.getElementById('enWord');
const words = document.getElementById('words');
const notepad = document.getElementById('notepad');

putDscrip();

putPred();

getWeath();

putAuth();

putEnWord();

putWords();

putNotepad();

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



