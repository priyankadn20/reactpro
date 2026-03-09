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
import ArrayOfObject from './components/ArrayOfObject';
import ComputedState from './components/ComputedState';
import ProblemPropsPractice from './components/ProblemPropsPractice';
import ProblemStatePractice from './components/ProblemsStatePractice';
import MakeTodoList from './components/TodoList';
import InputExample from './components/OnChangeEvent';
import FormExample from './components/OnSubmit';
import TernaryOperation from './components/TernaryOperation';
import ListRendering from './components/ListRendering';
import NestedListRender from './components/NestedListRendering';
import IncrementCount from './components/UseEffectPracticeOne';
import SetingTime from './components/SetingTime';
import  Counter from './components/UpdatingDocumentTitle';
import EventListener from './components/EventListenerPrc';
import AppRef from './components/RefPractice';
import UserProvider from './components/UserProvider';

function App() {
  const handleDelete = (city) => {
    alert(`delete ${city}`);
  };
  const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 },
  ];
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
      <BooleanExample />
      <AddArray />
      <AddObjectState />
      <ArrayOfObject />
      <ComputedState />
      <ProblemPropsPractice items={products} />
      <ProblemStatePractice />
      <MakeTodoList />
      <InputExample />
      <FormExample />
      <TernaryOperation />
      <ListRendering />
      <NestedListRender />
      <IncrementCount />
      <SetingTime />
      <Counter />
      <EventListener />
      <AppRef />
      <UserProvider  />
    </div>
  );
}

export default App;
