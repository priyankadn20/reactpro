import PropsSimple from './components/SimpleProps';
import PropsDestructuring from './components/Destructuring-Props';
import Button from './components/Rest-operation-destructing';
import ArrayListRendering from './components/ArrayListRendering';
import ArrayObject from './components/ArrayObjectRendering';
import Primitive from './components/StateReat';  
import StringState from './components/StringState';
import BooleanExample from './components/StringBoolen';
import AddArray from './components/AddStateArray';
import AddObjectState from './components/AddObjectState';


function App() {

  const handleDelete = (city) => {
    alert(`delete ${city}`);
  };
  return (
    <div className="App">
      <PropsSimple name="Priyanka" />
      <PropsDestructuring
        name="Priyanka"
        age={23}
        address={{ city: 'dhaka', country: 'Bangladesh' }}
        onDelete={handleDelete}
      />
      <Button
        text="Click me"
        onClick={() => alert('hello priyanka')}
        className="btn"
      />
      <ArrayListRendering />
      <ArrayObject />
      <Primitive />
      <StringState />
      <BooleanExample/>
      <AddArray/>
      <AddObjectState />
    </div>
  );
}

export default App;
