import Hello from './components/Hello';
import Fruits from './components/Fruits';
import ConditionalComponent from './components/ConditionalComponent';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  const person = {
    name: 'rob',
    message: 'hi',
    emoji: '😊',
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <ConditionalComponent />
      <Fruits />
      <Message />
      <Counter />
    </div>
  );
}

export default App;
