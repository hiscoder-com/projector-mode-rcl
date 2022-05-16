<div id="top"></div>

[![Contributors](https://img.shields.io/github/contributors/texttree/projector-mode-rcl.svg?style=for-the-badge)](https://github.com/texttree/projector-mode-rcl/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/texttree/projector-mode-rcl.svg?style=for-the-badge)](https://github.com/texttree/projector-mode-rcl/network/members)
[![Stargazers](https://img.shields.io/github/stars/texttree/projector-mode-rcl.svg?style=for-the-badge)](https://github.com/texttree/projector-mode-rcl/stargazers)
[![Issues](https://img.shields.io/github/issues/texttree/projector-mode-rcl.svg?style=for-the-badge)](https://github.com/texttree/projector-mode-rcl/issues)
[![MIT License](https://img.shields.io/github/license/texttree/projector-mode-rcl.svg?style=for-the-badge)](https://github.com/texttree/projector-mode-rcl/blob/master/LICENSE)

<div align="center">
  <a href="https://github.com/texttree/projector-mode-rcl">
    <img src="https://github.com/texttree/projector-mode-rcl/raw/master/images/logo.svg" alt="Logo" width="256" height="256">
  </a>
</div>

<h2><div align="center">projector-mode-rcl</div></h2>
<br />

<center><strong><a href="https://projector-mode-rcl.netlify.app">Explore the docs and code playground »</a></strong></center>
<br />
<br />
<center>
  <a href="https://github.com/texttree/projector-mode-rcl/issues">Report Bug · </a>
  <a href="https://github.com/texttree/projector-mode-rcl/issues">Request Feature</a>
</center>

<br />
<br />
<details>
  <summary>Table of Contents ↧</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://github.com/texttree/projector-mode-rcl/raw/master/images/screenshot.png" alt="Projector Mode RCL Shot" width="100%">

The library allows you to view content in an additional window

**Purpose**

- Be able to show content in a separate window

**Problem**

- there are very few programs that can show special content in projector mode. Often they have ready-made modules

**Scope**

- the library helps to transfer content from one browser window to another
- the library should not depend on what content is transferred

**Background**

- It's not easy to find a free app for a small church congregation to easily display Bible verses during a service. Especially if it is a translation into OL.

<a style="text-align: right; display: block" href="#top">(back to top)</a>

### Built With

- [React.js](https://reactjs.org/)
- [StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent)
- [React Styleguidist](https://react-styleguidist.js.org/)

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- GETTING STARTED -->

## Getting Started

### Installation

Add the library to your React app

- yarn

```bash
yarn add @texttree/projector-mode-rcl
```

- npm

```bash
npm install @texttree/projector-mode-rcl
```

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- USAGE EXAMPLES -->

## Usage

Use the useProjector hook to pass data to the second screen. For example:

```js static
import React from 'react';
import { useProjector } from '@texttree/projector-mode-rcl';

export default function Settings() {
  const { setData, getData } = useProjector();
  return (
    <>
      <p>Set verse</p>
      <input
        onChange={(e) => {
          setData('verse', e.target.value);
        }}
        value={getData('verse')}
      />
      <p>Set reference</p>
      <input
        onChange={(e) => {
          setData('reference', e.target.value);
        }}
        value={getData('reference')}
      />
    </>
  );
}
```

Create a component with a layout for the second screen.
In the component, use any variables you set via the hook. They will all be available as props.

```js static
import React from 'react';

export default function Layout({ verse, reference }) {
  return (
    <>
      <p>{verse}</p>
      <p>
        <small>{reference}</small>
      </p>
    </>
  );
}
```

Create a separate page and add a Projector component there and pass Layout as a prop

```js static
import React from 'react';
import { Projector } from '@texttree/projector-mode-rcl';
import Layout from './Layout';

export default function ProjectorPage() {
  return <Projector Layout={Layout} />;
}
```

_For more examples, please refer to the [Styleguidist link](https://projector-mode-rcl.netlify.app)_

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- ROADMAP -->

## Roadmap

**IN PROGRESS**

See the [open issues](https://github.com/texttree/projector-mode-rcl/issues) for a full list of proposed features (and known issues).

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. [Guidelines for external contributions.](https://forum.door43.org)

You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

If you would like to fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/texttree/projector-mode-rcl/blob/master/LICENSE) for more information.

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/texttree/projector-mode-rcl](https://github.com/texttree/projector-mode-rcl)

<a style="text-align: right; display: block" href="#top">(back to top)</a>
