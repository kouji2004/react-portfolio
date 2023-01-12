import './App.css';
import { BlogPage } from './BlogPage';
import { Header } from './Header';
import { HomePage } from './HomePage';
import {BrowserRouter as Route, Routes} from "react-router-dom";

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
