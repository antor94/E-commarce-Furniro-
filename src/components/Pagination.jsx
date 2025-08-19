import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
     

      {/* Page numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          style={{
            margin: "0 3px",
            padding: "6px 15px",
            background: currentPage === num ? "#B88E2F" : "#F9F1E7",
            color: currentPage === num ? "#fff" : "#000",

            cursor: "pointer",
            radius: "10px",
            
          }}
        >
          {num}
        </button>
      ))}


    </div>
  );
};

export default Pagination;