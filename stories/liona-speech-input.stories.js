"use strict";

import LionaSpeechInput from 'liona-speech-input';

export default {
  title: 'Liona Speech Input',
  component: LionaSpeechInput,
  includeStories: ["simpleStory","complexStory"]
};

export const simpleStory = () => '<liona-speech-input></liona-speech-input>';
export const complexStory = () => '<liona-speech-input></liona-speech-input>';

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};


export const withText = () => '<button class="btn">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};



