# React Lottie Loader.

> Lottie loader for React.

## Introduction

Lottie made animations for web sleek and beautiful and of course let designers to have their boundless creativity and use them in your project, just download or create your own [Lottie Files](https://lottiefiles.com/).

### Install

via npm

```bash
npm i react-lottie-loader
```

via yarn

```bash
yarn add react-lottie-loader
```

### Usage

Create your own or download Lottie files from here [Lottie Files](https://lottiefiles.com/).

Import animation data and LottieLoader component.

```javascript
import React from "react";
import catAnimationData 'src/animation/cat-animation.json';
import LottieLoader 'react-lottie-loader';

function App() {
  return (
    <div>
      <LottieLoader animationData={catAnimationData} />
    </div>
  );
}

export default App;
```

### Props

- animationData: an Object with the exported animation data.
- autoplay: true / false it will start playing as soon as it is ready
- className: css class name to pass the animation container.
- loop: true / false / number
- name: animation name for future reference
- path: the relative path to the animation object. (animationData and path are mutually exclusive)
- renderer: 'svg' / 'canvas' / 'html' to set the renderer

### Contributing

Contributions, issues and feature request are welcome! 💜

Fell free to check the [issues page](https://github.com/davidkhierl/react-lottie-loader/issues)

---

### Authors

- [**David Khierl Gidor**](https://github.com/davidkhierl)
