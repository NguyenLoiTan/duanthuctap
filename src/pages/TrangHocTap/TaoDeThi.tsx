import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const TaoDeThi = () => {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để có thể điều hướng

  const handleCreateExam = () => {
    // Xử lý logic khi tạo đề thi
    // Sau khi tạo xong, chuyển hướng sang trang "/TrangTienTrinhHocTap"
    navigate("/Tranghoctap");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Xin chào{" "}
          <span style={{ color: "rgba(242, 109, 33, 1)" }}>NGUYỄN TẤN LỢI</span>
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          type="select"
          name="registerType"
          id="registerType"
          style={{
            width: "600px",
            height: "48px",
            padding: "6px",
            border: "none",
            marginRight: "10px",
          }}
        >
          <option>Chọn môn thi</option>
          <option value="Front end">Lập trình Front-end</option>
          <option value="Back End">Lập trình Back End</option>
          <option value="VFX">VFX Artist</option>
          <option value="Design">UI/UX Design</option>
        </Input>
        <Button
          style={{
            width: "140px",
            height: "48px",
            padding: "10px 24px",
            borderRadius: "8px",
            border: "none",
            gap: "4px",
            backgroundColor: "rgba(242, 109, 33, 1)",
            color: "white",
          }}
          type="button" // Đảm bảo type là "button" để tránh submit form
          onClick={handleCreateExam} // Gọi hàm xử lý khi nhấn nút
        >
          + Tạo đề thi
        </Button>
      </div>
    </div>
  );
};

export default TaoDeThi;
