export const bookmarkCopy = {
  vi: {
    intro: 'Khi người dùng muốn đọc lại một bài viết, API lưu mã bài vào danh sách riêng của họ. Bài viết gốc vẫn nằm trong dữ liệu chung.',
    decision: 'Danh sách lưu nằm trong UserView, theo từng người dùng. Khi mở danh sách, truy vấn lấy thông tin bài viết qua các mã đã lưu. Luồng lưu kiểm tra bài tồn tại và đã được lưu hay chưa.',
  },
  en: {
    intro: 'When someone wants to revisit a post, the API stores its ID in their personal bookmark list. The original post stays in the shared collection.',
    decision: 'Each user’s bookmarks live in UserView. Opening the list looks up post details through the stored IDs. Saving checks whether the post exists and whether it is already saved.',
  },
};
