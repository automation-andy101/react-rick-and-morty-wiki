import React from 'react'
import styles from './Search.module.scss';

const search = () => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input placeholder='Search for characters' type='text' className={styles.input} />
        <button className='btn btn-primary fs-5'>Search</button>
    </form>
  )
}

export default search;
