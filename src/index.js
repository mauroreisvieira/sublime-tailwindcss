const tailwindClassNames = require('tailwind-class-names').default;

const configPath = sublime.config;
const config = __non_webpack_require__(configPath);
const pluginPath = sublime.plugin;
const separator = (config.options && config.options.separator) || ':';

tailwindClassNames({
  config,
  configPath,
  plugin: __non_webpack_require__(pluginPath),
  tree: true,
  strings: true
}).then(({ classNames }) => {
  console.log(
    JSON.stringify({
      classNames,
      separator,
      screens: config.screens || {},
      config
    })
  );
});
