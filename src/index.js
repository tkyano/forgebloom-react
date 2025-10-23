import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import BrowseCards from './pages/BrowseCards';
import MyDecks from './pages/MyDecks';
import CreateDeck from './pages/CreateDeck';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="browse-cards" element={<BrowseCards />}/>
          <Route path="create-deck" element={<CreateDeck />}/>
          <Route path="my-decks" element={<MyDecks />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

