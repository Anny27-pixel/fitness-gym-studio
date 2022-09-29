
import './App.css';
import Gym from './components/Gym/Gym';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Gym></Gym>
      <div className='question-section'>
        <h4>How Does React Works?</h4>
        <p>it will do efficient diff computations on the nodes.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.</p>
        <h4>Difference between props and state?</h4>
        <p>Props are read only .It can not be modified. On the otherhand State changes can be asynchronous and it can be modified using this.setState.</p>
        <h4>What does the work of useEffect except dataLoad from api?</h4>
        <p>Except data load and fetch from api ,the useEffect examples are  setting up a subscription, and manually changing the DOM in React components.</p>
      </div>
    </div>
  );
}

export default App;
