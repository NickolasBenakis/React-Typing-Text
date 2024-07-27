import TypingText from './typing-text'

const App = () => {
  return (
    <div>
      <h1>Typing Text</h1>
      <TypingText text="Hello World!" speed={50} />
    </div>
  )
}

export default App