import Hello from './components/Hello';
import Fruits from './components/Fruits';
import ConditionalComponent from './components/ConditionalComponent';
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
    </div>
  );
}

export default App;
