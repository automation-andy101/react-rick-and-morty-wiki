import React from 'react'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

  let clearFilteres = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };

  return (
    <div className='col-12'>
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div
        onClick={clearFilteres}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary text-decoration-underline mb-4'
        >
          Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Filters;
