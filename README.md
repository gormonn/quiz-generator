


Inspired by this [post](https://www.linkedin.com/feed/update/urn:li:activity:7038076985461325824?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7038076985461325824%29)

Todo:
- Read [this](https://tsavo.medium.com/prismjs-highlightjs-codemirror-6-codedetectionapi-%EF%B8%8F-af99dc13d83b)
- Find some alternative for [CodeDetectionAPI](http://codedetectionapi.runtime.dev/) 
  - Or write lazy-loading for hljs detected langs
- [Prism](https://prismjs.com/)
- [Code Mirror 6](https://codemirror.net/6/) - may be used for syntax highlight + editor features

Code detection is not an important option for this project. So I don’t have to take this to work.

I assume that Prism is incompatible with Code Mirror.

Because Prism emphasizes the "immutability" of the code in its documentation.

However, I think that it is possible to combine them conveniently. In the worst case, it could be a web components solution.


Roadmap:
- [ ] try Prism for syntax highlight [Usage with react](https://reemus.dev/article/code-highlighting-in-react-using-prismjs)
- [ ] try CodeMirror for code edit
- [ ] try to compare them
- [ ] compare lang supports between them
- [ ] create language selector
- [ ] create quiz elements like from post
- [ ] make it customizable
- [ ] upload to image
- [ ] publish

Bonus:
- [ ] add [custom themes](https://github.com/PrismJS/prism-themes)
- [ ] website redesign
- [ ] add language detector

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
