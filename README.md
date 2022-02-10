<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ZoreAnkit/ankit-vue-language-lib">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Vue language Plugin</h3>

  <p align="center">
    Vue Language plugin which translates text in any specified language with help of user defined language files.
    <br />
    <br />
    <a href="https://zoreankit.github.io/demo-vue-language/">View Demo</a>
    ·
    <a href="https://github.com/ZoreAnkit/ankit-vue-language-lib/issues">Report Bug</a>
    ·
    <a href="https://github.com/ZoreAnkit/ankit-vue-language-lib/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Vue language plugin English][product-english]](https://zoreankit.github.io/demo-vue-language/)
[![Vue language plugin French][product-french]](https://zoreankit.github.io/demo-vue-language/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Vue.js](https://vuejs.org/)
- [Javascript](https://javascript.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is vue language plugin which helps to display words in any preferred language selected by user for your project.

### Prerequisites

Requires minimum Versions

1. Vue - ^2.6
2. NPM - 6.13
3. Node - 12.14

### Installation

```sh
npm i ankit-vue-language-lib
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

STEP 1: Create language files

Eg: en.js

```
export default
    {
        "title": "title",
        "Hello World": "Hello World"
    }
```

Eg: fr.js

```
export default
    {
        "title": "titre",
        "Hello World": "Bonjour le monde"
    }
```

STEP 2: Import plugin along with the language files

```
import languagePlugin from "ankit-vue-language-lib"
import store from './store/index'
import en from './language/en'
import fr from './language/fr'
```

STEP 3: Use plugin

```
Vue.use(languagePlugin, store, { 'en': en, 'fr': fr })
```

STEP 4: If you dont have vuex store install vuex and create store file

```
npm install vuex --save
```

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
    },
})

export default store
```

STEP 5: Use translate() from plugin

Syntax - translate(key_defined_in_language_file)

Eg:
```
<div>{{translate('Hello World')}}</div>
```

_For more information on how to install and use plugin, please refer to this (https://github.com/ZoreAnkit/demo-vue-language)_

<p align="right">(<a href="#top">back to top</a>)</p>

See the [open issues](https://github.com/ZoreAnkit/ankit-vue-language-lib/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ankit Zore - ankitzore2@gmail.com

Project Link: [https://github.com/ZoreAnkit/ankit-vue-language-lib](https://github.com/ZoreAnkit/ankit-vue-language-lib)

<p align="right">(<a href="#top">back to top</a>)</p>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ZoreAnkit/ankit-vue-language-lib.svg?style=for-the-badge
[contributors-url]: https://github.com/ZoreAnkit/ankit-vue-language-lib/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ZoreAnkit/ankit-vue-language-lib.svg?style=for-the-badge
[forks-url]: https://github.com/ZoreAnkit/ankit-vue-language-lib/network/members
[stars-shield]: https://img.shields.io/github/stars/ZoreAnkit/ankit-vue-language-lib.svg?style=for-the-badge
[stars-url]: https://github.com/ZoreAnkit/ankit-vue-language-lib/stargazers
[issues-shield]: https://img.shields.io/github/issues/ZoreAnkit/ankit-vue-language-lib.svg?style=for-the-badge
[issues-url]: https://github.com/ZoreAnkit/ankit-vue-language-lib/issues
[license-shield]: https://img.shields.io/github/license/ZoreAnkit/ankit-vue-language-lib.svg?style=for-the-badge
[license-url]: https://github.com/ZoreAnkit/ankit-vue-language-lib/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ankit-zore-31a52a159
[product-english]: images/English.png
[product-french]: images/French.png
