import React from 'react'
import FilterBTN from '../FilterBTN'

const Gender = ({ setPageNumber, setGender }) => {
    let genders = ["Female", "Male", "Genderless", "Unknown"];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                >
                    Gender
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {genders.map((items, index) => (
                        <FilterBTN setPageNumber={setPageNumber} task={setGender} key={index} name="gender" index={index} items={items} className="my-2" />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Gender;
