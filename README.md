# Little Love Note

Trang web thư tình nhỏ, dễ thương, responsive trên nhiều thiết bị.

## Cấu trúc thư mục

```
little_love_note/
├── index.html          # Trang chính
├── css/style.css       # Giao diện (responsive)
├── js/script.js        # Logic xử lý
├── config/content.json # Nội dung có thể chỉnh sửa
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
  "gift": "Lời nhắn trong món quà"
}
```

- `body` hỗ trợ ngắt dòng bằng `\n\n`.

### 2. Chạy trang web
Mở file `index.html` trực tiếp bằng trình duyệt, hoặc triển khai lên Netlify Drop / GitHub Pages / bất kỳ hosting tĩnh nào.

## Responsive

Giao diện đã tối ưu cho:
- Điện thoại nhỏ (≤ 360px)
- Điện thoại (≤ 480px)
- Tablet nhỏ / điện thoại ngang (≤ 600px)
- Tablet (601px – 900px)
