import React from 'react';

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(Array(totalPages), (_, index) => index + 1);

  return (
    <div>
      <img src="/assets/img/Iconmuitentrai.png" alt="" style={{marginRight:20}}/>
      {pageNumbers.map(pageNumber => (
      <button
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
        style={{
          marginRight: '5px',
          backgroundColor: currentPage === pageNumber ? 'rgba(242, 109, 33, 1)' : 'white',
          color: currentPage === pageNumber ? 'white' : 'black',
          borderRadius: '50%', // Để tạo hình tròn
          border: 'none', // Để loại bỏ khung bọc
          width: '30px', // Điều chỉnh kích thước của nút
          height: '30px', // Điều chỉnh kích thước của nút
          padding: 0, // Loại bỏ padding để nút không còn khoảng trống
          cursor: 'pointer',
        }}
      >
        {pageNumber}
      </button>
    ))}
    <img src="/assets/img/Iconmuoitenphai.png" alt="" style={{marginLeft:20}}/>
    </div>
  );
};

export default PaginationButtons;
