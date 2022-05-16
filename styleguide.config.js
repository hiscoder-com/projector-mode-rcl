const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const { name, version, url } = require('./package.json');

let sections = [
  {
    name: 'README',
    content: 'README-SG.md',
  },
  {
    name: 'Base',
    components: [
      'src/components/Projector/Projector.js',
      'src/components/Projector/useProjector.jsx',
    ],
  },
  {
    name: 'Projector Screen',
    content: 'src/components/Projector/ProjectorScreen.md',
    exampleMode: 'collapse',
  },
  {
    name: 'Preview',
    components: ['src/components/Extra/usePreview.jsx'],
    sections: [
      {
        name: 'Example of Preview',
        content: 'src/components/Extra/ProjectorExtra.md',
      },
    ],
  },
];

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  ribbon: {
    url,
    text: 'Open on GitHub',
  },
  title: `${name} v${version}`,
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content:
            'React component library for displaying content in an additional window',
        },
      ],
    },
  },
  moduleAliases: { [name]: path.resolve(__dirname, 'src') },
  skipComponentsWithoutExample: true,
  sections,
  styles: function styles(theme) {
    return {
      ComponentsList: {
        isSelected: {
          fontWeight: 'normal',
          '&>a': {
            fontWeight: 'bold !important',
          },
        },
      },
      Code: {
        code: {
          // make inline code example appear the same color as links
          backgroundColor: '#eff1f3',
          fontSize: 14,
          borderRadius: '6px',
          padding: '.2em .4em',
        },
      },
    };
  },
  theme: {
    color: {
      link: '#BA4D0C',
      linkHover: '#7A0D0C',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff',
    },
    fontFamily: {},
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.js');
    return `import { ${componentName} } from '${name}';`;
  },
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props;
    if (typeof settings?.file === 'string') {
      const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);
      settings.static = true;
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      };
    }
    return props;
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        process: { env: {} },
      }),
    ],
  },
};
