import React from 'react';
import { Input } from 'reactstrap';

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 80px 0px 80px', backgroundColor: 'white',borderRadius:5 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 48, marginRight: '10px' }}>
          <img src="/assets/img/fi_search.png" alt="search" />
          <Input style={{ width: 378, border: "none", outline: 'none' }} type="text" placeholder="Nhập vị trí muốn ứng tuyển" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: 50, marginRight: '10px' }}>
          <Input type="select" style={{ width: 378 }}>
            <option value="">Chọn lĩnh vực chuyên môn</option>
            <option value="linh-vuc-1">Lĩnh vực 1</option>
            <option value="linh-vuc-2">Lĩnh vực 2</option>
          </Input>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: 48, marginRight: '10px' }}>
          <Input type="select" style={{ width: 378 }}>
            <option value="">Chọn công ty</option>
            <option value="linh-vuc-1">Công ty 1</option>
            <option value="linh-vuc-2">Công ty 2</option>
          </Input>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: 48 }}>
          <button style={{ background: "rgba(242, 109, 33, 1)", color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px' }}>
            <img src="/assets/img/fi_search (white).png" alt="search" />
            Tìm Việc
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
