import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App() {
  return(
    <Router>
      <div className='App'>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </Router>
  );
}


const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchData, updateFetchedData] = useState([]);

  let { results, info } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api])

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
              <Cards results={results} />
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
