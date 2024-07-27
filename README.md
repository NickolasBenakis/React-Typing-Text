## Typing Text

`Typing Text` is a simple React component that displays text with a typing animation. It's easy to use and highly customizable, allowing you to create engaging text animations in your React applications.

Features
* Typing animation for displaying text.
* Customizable typing speed.
* onAnimationEnd callback.
* extendable by custom props.

# Installation

Install the package

```
npm install typing-text

```
# Usage

```
import React from 'react';
import TypingText from 'typing-text';

function App() {
  return (
    <div className="App">
      <TypingText
        text="Hello, World!"
        speed={100}
        onAnimationEnd={() => console.log('Typing completed')}
      />
    </div>
  );
}

export default App;
```

# Props

| Prop |	Type  |	Default |	Description |
| -----| -------|---------| ------------|
|text |	string	|"" |	The text to display with typing animation.|
|speed |	number	|100	| Typing speed in milliseconds per character. (The less the faster)|
|onAnimationEnd |	function	| undefined |	Callback function when typing ends.|
|---------------|-----------| ----------|-----------------------------------|

# Extend

You can pass custom classnames, styles or any prop since we spread all the props in the component.


# Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue on GitHub.

# License
This project is licensed under the MIT License.