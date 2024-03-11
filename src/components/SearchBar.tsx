import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const SearchBar = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}> {/* Thêm style để sử dụng flexbox */}
        <Col xs={12} md={4} style={{ padding: 0, flex: 1 }}> {/* Thêm style để xóa padding và sử dụng flexbox */}
          <div style={{ display: 'flex', alignItems: 'center', height: 48 }}> {/* Thêm style để căn giữa nội dung */}
            <img src="/assets/img/fi_search.png" alt="search" />
            <input style={{ width: 378, border: "none", outline: 'none' }} type="text" placeholder="Nhập vị trí muốn ứng tuyển" />
          </div>
        </Col>

        <Col xs={12} md={3} style={{ padding: 0, flex: 1 }}> {/* Thêm style để xóa padding và sử dụng flexbox */}
          <div style={{ display: 'flex', alignItems: 'center', height: 50 }}> {/* Thêm style để căn giữa nội dung */}
            <select style={{ width: 378,appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              padding: '8px',
              border: 'none',
              borderRadius: '0',
              background: 'transparent',
              color: 'black', }}>
              <option value="">Chọn lĩnh vực chuyên môn</option>
              <option value="linh-vuc-1">Lĩnh vực 1</option>
              <option value="linh-vuc-2">Lĩnh vực 2</option>
            </select>
          </div>
        </Col>

        <Col xs={12} md={3} style={{ padding: 0, flex: 1 }}> {/* Thêm style để xóa padding và sử dụng flexbox */}
          <div style={{ display: 'flex', alignItems: 'center', height: 48 }}> {/* Thêm style để căn giữa nội dung */}
            <select style={{ width: 378 ,appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              padding: '8px',
              border: 'none',
              borderRadius: '0',
              background: 'transparent',
              color: 'black', }}>
              <option value="">Chọn công ty</option>
              <option value="linh-vuc-1">Công ty 1</option>
              <option value="linh-vuc-2">Công ty 2</option>
            </select>
          </div>
        </Col>

        <Col xs={12} md={2} style={{ padding: 0, flex: 1 }}> {/* Thêm style để xóa padding và sử dụng flexbox */}
          <div style={{ display: 'flex', alignItems: 'center', height: 48, }}> {/* Thêm style để căn giữa nội dung */}
            <button style={{background: "rgba(242, 109, 33, 1)", color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px'}}>
              <img src="/assets/img/fi_search (white).png" alt="search" />
              Tìm Việc
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
