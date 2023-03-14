import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({ setPageNumber, setSpecies }) => {
  let species = ["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet"];

  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Species
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-3">
            {species.map((items, index) => (
              <FilterBTN setPageNumber={setPageNumber} task={setSpecies} key={index} name="species" index={index} items={items} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Species
