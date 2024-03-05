const MenuSV = () => {
  return ( 
    <div style={{ width: '1920px', height: '102px' ,background: 'rgba(255, 255, 255, 1)'}}>
          <div
          style={{
            position: 'absolute',
            width: '373.24px',
            height: '52px',
            top: '25px',
            left: '315px',
            gap: '24px'
          }}
        >
           <img src="/assets/img/iconMenu.png" alt="iconimg" />
        </div>

      <div style={{
        position: 'absolute',
        width: 282, height: 40, top: 37, left: 1089, gap: 4,color:"rgba(242, 109, 33, 1)"}}>
          <a style={{textDecoration:"none", color:"rgba(242, 109, 33, 1)"}} href="/#">  <img style={{position:"absolute"}} src="/assets/img/user.png" alt="user" />
           <span style={{marginLeft:34}}>Xem JD yêu cầu tuyển dụng</span></a>

         
      </div>

      <div
      style={{
        position:"absolute",
        width: '202px',
        height: '40px',
        top: '37px',
        left: '1403px',
        gap: '4px'
      }}
    >
      <a style={{textDecoration:"none", color:"rgba(109, 109, 109, 1)"}} href="/#"> <img style={{position:"absolute"}} src="/assets/img/DangKy.png" alt="dangky" />
      <span style={{marginLeft:34}}>Đăng ký trực tuyến</span></a>
    </div>

    </div>
   );
}
 
export default MenuSV;