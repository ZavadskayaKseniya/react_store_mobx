import "@/styles/Pagination.modules.scss";

import {Button} from "@mui/material";
import React, {ReactFragment} from 'react';

const Pagination = ({ cardsPerPage, totalCards, paginate,nextPage,prevPage}:{cardsPerPage:number, totalCards:number, paginate:any,prevPage:any,nextPage:any}) => {
  const pageNumbers = [];

  for (let i =1; i<= Math.ceil(totalCards/cardsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="pagination">
      <Button className="pagination_btn" onClick={nextPage}>...</Button>
      {
        pageNumbers.map(number => (
          <a className="page-link bg-transparent" href="#" key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        ))
      }
      <Button onClick={prevPage}>...</Button>

    </div>
  );
};

export default Pagination;