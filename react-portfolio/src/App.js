import './App.css';
import { BlogPage } from './BlogPage';
import { Header } from './Header';
import { HomePage } from './HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <BlogPage/>
    </div>
  );
}

export default App;
