import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
