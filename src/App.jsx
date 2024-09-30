
import './App.css';
import ItemCollector from './ItemCollector.jsx';
import Background from './Background.jsx';
import Nav from './Nav.jsx'
import Arrow from './Arrow.jsx'
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Arrow />
      <Background />
      <ItemCollector />
    </div>
  );
}

export default App;
