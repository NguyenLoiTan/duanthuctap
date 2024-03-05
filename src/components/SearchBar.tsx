const SearchBar = () => {
    return (
      <div
        style={{
          position: 'absolute',
          width: '1290px',
          height: '60px',
          top: '150px',
          left: '315px',
          padding: '6px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 1)',
          display: 'flex', // Thêm thuộc tính display: flex
          alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
        }}
      >
        {/* input */}
        <div
          style={{
            display: 'flex', // Thêm thuộc tính display: flex
            alignItems: 'center', // Căn giữa các phần tử con theo chiều dọc
            width: '378px',
            height: '48px',
            padding: '10px 16px',
            border: '0px 1px 0px 0px',
            gap: '10px',
          }}
        >
          <img src="/assets/img/fi_search.png" alt="search" />
          <input type="text" placeholder="Nhập vị trí muốn ứng tuyển" style={{ border: 'none', outline: 'none' }} />
        </div>
        
        {/* Dropdown */}
        <div
          style={{
            display: 'flex', // Thêm thuộc tính display: flex
            alignItems: 'center', // Căn giữa các phần tử con theo chiều dọc
            width: '379px',
            height: '48px',
            border: '0px 1px 0px 0px',
            gap: '8px',
          }}
        >
          <select
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              padding: '8px',
              border: 'none',
              borderRadius: '0',
              background: 'transparent',
              color: 'black',
            }}
          >
            <option value="">Chọn lĩnh vực chuyên môn</option>
            <option value="linh-vuc-1">Lĩnh vực 1</option>
            <option value="linh-vuc-2">Lĩnh vực 2</option>
          </select>
        </div>
  
        {/* Dropdown2 */}
        <div
          style={{
            display: 'flex', // Thêm thuộc tính display: flex
            alignItems: 'center', // Căn giữa các phần tử con theo chiều dọc
            width: '378px',
            height: '48px',
            border: '0px 1px 0px 0px',
            gap: '8px',
          }}
        >
          <select
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              padding: '8px',
              border: 'none',
              borderRadius: '0',
              background: 'transparent',
              color: 'black',
            }}
          >
            <option value="">Chọn công ty</option>
            <option value="linh-vuc-1">Công ty 1</option>
            <option value="linh-vuc-2">Công ty 2</option>
          </select>
        </div>
  
        {/* Button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ background: "rgba(242, 109, 33, 1)", color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
                <img src="/assets/img/fi_search (white).png" alt="search" style={{ marginRight: '8px' }} />
                Tìm Việc
            </button>
        </div>

      </div>
    );
  };
  
  export default SearchBar;