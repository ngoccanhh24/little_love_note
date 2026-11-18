# Little Love Note

Trang web thư tình nhỏ, dễ thương, responsive trên nhiều thiết bị.

## Cấu trúc thư mục

```
little_love_note/
├── index.html          # Trang chính
├── css/style.css       # Giao diện (responsive)
├── js/script.js        # Logic xử lý
├── config/content.json # Nội dung có thể chỉnh sửa
├── music/
│   └── love.mp3        # File nhạc nền (thêm file của bạn vào đây)
├── photos/
│   └── photo1.jpg      # Ảnh 앨범 (thêm ảnh của bạn vào đây)
└── README.md
```

## Cách sử dụng

### 1. Chỉnh sửa nội dung
Mở file `config/content.json` và sửa đổi các trường theo ý muốn:

```json
{
  "headline": "Tiêu đề thư",
  "subline": "Dòng giới thiệu",
  "salutation": "Lời chào",
  "date": "Ngày tháng",
  "body": "Nội dung chính của thư",
  "signature": "Lời ký tên",
  "footer": "Dòng cuối trang",
  "wish": "Lời chúc riêng",
  "gift": "Lời nhắn trong món quà",
  "music": "music/music.mp3",
  "photos": []
}
```

- `body` hỗ trợ ngắt dòng bằng `\n\n`.
- `photos` để trống mảng `[]` nếu không dùng ảnh.
- `music` là đường dẫn file nhạc. Để trống nếu không muốn nhạc.

### 2. Thêm nhạc nền
Thêm file âm thanh (MP3) vào folder `music/` và đặt tên là `music.mp3` (hoặc sửa đường dẫn trong `content.json`).

Nút **♫ Bật nhạc** sẽ:
- Phát nhạc nếu có file.
- Hiển thị thông báo "Chưa có file nhạc" nếu không có file.

### 3. Thêm ảnh 앨범
Thêm các file ảnh vào folder `photos/`, rồi liệt kê trong `content.json` theo mảng `photos`:

```json
"photos": [
  { "src": "photo1.jpg", "caption": "một chiếc kỷ niệm ♡" },
  { "src": "photo2.jpg", "caption": "một chiếc kỷ niệm ♡" }
]
```

- `src`: tên file ảnh trong folder `photos/`.
- `caption`: chữ chú thích dưới ảnh (tuỳ chọn).

Nếu file ảnh không tồn tại, trang sẽ hiển thị thông báo thay ảnh bằng chữ.

### 4. Chạy trang web
Mở file `index.html` trực tiếp bằng trình duyệt, hoặc triển khai lên Netlify Drop / GitHub Pages / bất kỳ hosting tĩnh nào.

## Responsive

Giao diện đã tối ưu cho:
- Điện thoại nhỏ (≤ 360px)
- Điện thoại (≤ 480px)
- Tablet nhỏ / điện thoại ngang (≤ 600px)
- Tablet (601px – 900px)

## Lưu ý

Do trình duyệt chặn autoplay, người dùng cần bấm nút **♫ Bật nhạc** để phát âm thanh.
