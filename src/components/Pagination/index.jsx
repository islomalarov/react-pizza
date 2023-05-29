import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/paginationSlice';

export default function Pagination() {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
}
