# mystorybook
Storybook of my webcomponents

## run 
1) modern method
```
npx start-storybook -p 6006
```
or 2) classic method

```
npm run storybook
 ```

## add a component story

1. install the component local
```
npm install <component-name> 

# example: 
npm install liona-speech-input
```

2. add the import to liona-speech-input.stories.js
```
import { configure } from 'liona-speech-input';
```

3. add the story use case
```
export const speechExample = () => '<liona-speech-input></liona-speech-input>';
```


## Quellen
* Setup an html storybook: https://storybook.js.org/docs/guides/guide-html/
