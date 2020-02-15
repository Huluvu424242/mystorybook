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
* Component Story Format https://medium.com/storybookjs/component-story-format-66f4c32366df
* Write Stories with MDX files https://dev.to/open-wc/storybook-for-web-components-on-steroids-4h29
* MDX comming soon https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md
* Webcomponent description via json https://github.com/open-wc/open-wc/blob/master/packages/demoing-storybook/demo/custom-elements.json
* Webcomponent JSON Description https://github.com/webcomponents/custom-elements-json
* JSON description via custom-elements.json https://open-wc.org/demoing/demo/custom-elements.json
* Open-WC JSON tipp https://open-wc.org/demoing/#custom-elements-json

