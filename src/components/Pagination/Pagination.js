import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({ info, pageNumber, setPageNumber }) => {
    // let next = () => {
    //     setPageNumber((x) => x + 1);
    // };
    // let prev = () => {
    //     if(pageNumber === 1) return
    //     setPageNumber((x) => x - 1);
    // };

    return <ReactPaginate 
            className={'pagination justify-content-center gap-4 my-4'}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            previousLabel='Prev'
            nextLabel='Next'
            nextClassName='btn btn-primary'
            previousClassName='btn btn-primary'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            onPageChange={(data) => {
                setPageNumber(data.selected + 1);
            }}
            pageCount={info?.pages}
            
         />
        // <div className='container d-flex justify-content-center gap-5 my-5'>
        //     <button onClick={prev} className='btn btn-primary'>Prev</button>
        //     <button onClick={next} className='btn btn-primary'>Next</button>
        // </div>

        

}

export default Pagination;
