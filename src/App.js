import './App.css';
import Header from './components/header/Header';
import Questions from './components/questions/Questions';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Questions />
      </div>
    </div>
  );
}

export default App;
