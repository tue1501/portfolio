export const details = {
  "threads": {
    "flow": [
      "Bài viết",
      "Lưu bài",
      "Thông báo"
    ],
    "features": [
      [
        "Quản lý danh sách lưu theo người dùng",
        "Lưu tham chiếu bài viết trong UserView. Luồng lưu kiểm tra bài còn tồn tại và xử lý trường hợp người dùng lưu lại cùng một bài."
      ],
      [
        "Tổng hợp dữ liệu cho danh sách đã lưu",
        "Truy vấn bài viết và thông tin tác giả từ các mã đã lưu, rồi bổ sung trạng thái thích và lưu theo người dùng đang đăng nhập."
      ],
      [
        "Quản lý trạng thái đọc của thông báo",
        "Xử lý chuyển trạng thái sang đã đọc và phân biệt trường hợp thông báo đã được đọc trước đó."
      ]
    ]
  },
  "petland": {
    "flow": [
      "Giỏ hàng",
      "Giảm giá",
      "Đặt hàng"
    ],
    "features": [
      [
        "Đồng bộ dữ liệu khi hủy đơn",
        "Dùng transaction SQL để cập nhật trạng thái đơn, hoàn số lượng tồn kho theo biến thể và điều chỉnh dữ liệu giảm giá liên quan trong cùng một luồng."
      ],
      [
        "Thống kê đơn theo trạng thái và phương thức thanh toán",
        "Tổng hợp số đơn và tổng tiền theo khoảng thời gian, phân tách thanh toán online và COD theo trạng thái đơn."
      ],
      [
        "Mô hình hóa điều kiện giảm giá",
        "Lưu cấu hình chương trình giảm giá theo thời gian áp dụng, loại giảm, ngưỡng và số lượng."
      ]
    ]
  },
  "hospital": {
    "flow": [
      "Lịch khám",
      "Hồ sơ",
      "Kết quả"
    ],
    "features": [
      [
        "Kiểm tra tính nhất quán giữa hồ sơ và lịch hẹn",
        "Khi tạo hồ sơ từ lịch hẹn, kiểm tra bệnh nhân, bác sĩ, ngày khám và trạng thái lịch để tránh gắn hồ sơ vào lượt khám sai."
      ],
      [
        "Chuẩn hóa khung giờ với dữ liệu lịch hẹn cũ",
        "Khi trả lịch hẹn, ưu tiên giờ bắt đầu và kết thúc riêng. Với bản ghi cũ, tách hai mốc giờ từ chuỗi khung giờ để trả cùng một cấu trúc."
      ],
      [
        "Tổng hợp dữ liệu cho hồ sơ khám",
        "Truy vấn hồ sơ cùng lịch hẹn, thông tin bác sĩ và kết quả xét nghiệm liên quan để hiển thị theo lượt khám."
      ]
    ]
  },
  "charity": {
    "flow": [
      "Chiến dịch",
      "KYC",
      "Rút tiền"
    ],
    "features": [
      [
        "API duyệt chiến dịch",
        "Xây dựng API phục vụ thao tác duyệt chiến dịch từ dashboard quản trị."
      ],
      [
        "Xử lý xác minh KYC",
        "Đảm nhận phần xử lý KYC trong dashboard quản trị của dự án nhóm."
      ],
      [
        "Kiểm tra giao dịch rút tiền on-chain",
        "Dùng viem để kiểm tra giao dịch rút tiền trên blockchain trong luồng quản trị, nơi cần đối chiếu thông tin giao dịch với yêu cầu rút."
      ]
    ]
  }
};
