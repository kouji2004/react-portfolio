import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
      <h1>Hello React Router</h1>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;