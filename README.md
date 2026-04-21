# Hướng Dẫn Học Tập

## 📌 Mục Lục

- [🟢 Thẻ HTML Phổ Biến](#-thẻ-html-phổ-biến)
  - [Cấu trúc trang](#1️⃣-cấu-trúc-trang)
  - [Văn bản & Tiêu đề](#2️⃣-văn-bản--tiêu-đề)
  - [Liên kết & Hình ảnh](#3️⃣-liên-kết--hình-ảnh)
  - [Danh sách](#4️⃣-danh-sách)
  - [Bảng biểu](#5️⃣-bảng-biểu)
  - [Form & Nhập liệu](#6️⃣-form--nhập-liệu)
  - [Bố cục & Container](#7️⃣-bố-cục--container)
- [🟡 Thẻ HTML Ít Dùng](#-thẻ-html-ít-dùng)
  - [Văn bản đặc biệt](#1️⃣-văn-bản-đặc-biệt)
  - [Nhúng nội dung](#2️⃣-nhúng-nội-dung)
  - [Semantic nâng cao](#3️⃣-semantic-nâng-cao)
  - [Tương tác & Media](#4️⃣-tương-tác--media)
- [💡 Mẹo Ghi Nhớ](#-mẹo-ghi-nhớ)

---

## 🟢 Thẻ HTML Phổ Biến

> Đây là những thẻ **bắt buộc phải biết**, xuất hiện trong hầu hết mọi trang web.

---

### 1️⃣ Cấu trúc trang

| Thẻ | Tên đầy đủ | Chức năng | Ví dụ |
|-----|-----------|-----------|-------|
| `<!DOCTYPE html>` | Document Type | Khai báo phiên bản HTML5 | `<!DOCTYPE html>` |
| `<html>` | HTML Root | Gốc của toàn bộ trang | `<html lang="vi">` |
| `<head>` | Head | Chứa metadata (không hiển thị) | `<head>...</head>` |
| `<body>` | Body | Chứa nội dung hiển thị | `<body>...</body>` |
| `<title>` | Title | Tiêu đề tab trình duyệt | `<title>Trang Chủ</title>` |
| `<meta>` | Metadata | Thông tin mô tả trang | `<meta charset="UTF-8">` |
| `<link>` | Link | Liên kết file CSS bên ngoài | `<link rel="stylesheet" href="style.css">` |
| `<script>` | Script | Nhúng hoặc liên kết JavaScript | `<script src="app.js"></script>` |

```html
<!-- 🧱 Khung sườn HTML cơ bản -->
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang của tôi</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- Nội dung trang ở đây -->
    <script src="app.js"></script>
  </body>
</html>
```

---

### 2️⃣ Văn bản & Tiêu đề

| Thẻ | Chức năng | Ví dụ |
|-----|-----------|-------|
| `<h1>` → `<h6>` | Tiêu đề từ lớn → nhỏ | `<h1>Tiêu đề chính</h1>` |
| `<p>` | Đoạn văn bản | `<p>Đây là đoạn văn.</p>` |
| `<span>` | Định dạng inline nhỏ | `<span style="color:red">đỏ</span>` |
| `<strong>` | **In đậm** – quan trọng | `<strong>Quan trọng!</strong>` |
| `<em>` | *In nghiêng* – nhấn mạnh | `<em>Lưu ý</em>` |
| `<br>` | Xuống dòng | `Dòng 1<br>Dòng 2` |
| `<hr>` | Đường kẻ ngang | `<hr>` |

```html
<!-- 📝 Ví dụ văn bản -->
<h1>Chào mừng đến với HTML</h1>
<p>HTML là <strong>ngôn ngữ đánh dấu</strong> dùng để xây dựng trang web.</p>
<p>Học HTML rất <em>thú vị</em> và không khó!</p>
<hr>
<p>Phần tiếp theo bắt đầu từ đây.</p>
```

> 💡 **Quy tắc SEO**: Mỗi trang chỉ nên có **1 thẻ `<h1>`**. Dùng `<h2>` → `<h6>` cho các mục con.

---

### 3️⃣ Liên kết & Hình ảnh

| Thẻ | Chức năng | Thuộc tính quan trọng |
|-----|-----------|----------------------|
| `<a>` | Liên kết (hyperlink) | `href`, `target`, `rel` |
| `<img>` | Hình ảnh | `src`, `alt`, `width`, `height` |

```html
<!-- 🔗 Liên kết -->
<a href="https://google.com" target="_blank">Mở Google (tab mới)</a>
<a href="/trang-lien-he.html">Liên hệ</a>
<a href="mailto:email@example.com">Gửi Email</a>
<a href="tel:+84901234567">Gọi điện</a>

<!-- 🖼️ Hình ảnh -->
<img src="anh-dai-dien.jpg" alt="Ảnh đại diện của tôi" width="300">

<!-- 🔗 Hình ảnh có thể click -->
<a href="https://example.com">
  <img src="banner.jpg" alt="Banner quảng cáo">
</a>
```

> ⚠️ **Luôn thêm `alt`** cho `<img>` – giúp accessibility và SEO!

---

### 4️⃣ Danh sách

| Thẻ | Loại | Chức năng |
|-----|------|-----------|
| `<ul>` | Unordered List | Danh sách **không** thứ tự (dấu chấm) |
| `<ol>` | Ordered List | Danh sách **có** thứ tự (số 1, 2, 3...) |
| `<li>` | List Item | Mục trong danh sách |
| `<dl>` | Definition List | Danh sách định nghĩa |
| `<dt>` | Definition Term | Thuật ngữ cần định nghĩa |
| `<dd>` | Definition Desc | Mô tả thuật ngữ |

```html
<!-- 📋 Danh sách không thứ tự -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- 🔢 Danh sách có thứ tự -->
<ol>
  <li>Học HTML</li>
  <li>Học CSS</li>
  <li>Học JavaScript</li>
</ol>

<!-- 📖 Danh sách định nghĩa -->
<dl>
  <dt>HTML</dt>
  <dd>Ngôn ngữ đánh dấu siêu văn bản</dd>
  <dt>CSS</dt>
  <dd>Ngôn ngữ tạo kiểu cho trang web</dd>
</dl>
```

---

### 5️⃣ Bảng biểu

| Thẻ | Chức năng |
|-----|-----------|
| `<table>` | Tạo bảng |
| `<thead>` | Phần đầu bảng |
| `<tbody>` | Phần thân bảng |
| `<tfoot>` | Phần chân bảng |
| `<tr>` | Hàng (table row) |
| `<th>` | Ô tiêu đề (in đậm, căn giữa) |
| `<td>` | Ô dữ liệu thường |

```html
<!-- 📊 Bảng điểm học sinh -->
<table border="1">
  <thead>
    <tr>
      <th>Môn học</th>
      <th>Điểm giữa kỳ</th>
      <th>Điểm cuối kỳ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Toán</td>
      <td>8.5</td>
      <td>9.0</td>
    </tr>
    <tr>
      <td>Văn</td>
      <td>7.0</td>
      <td>8.0</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Trung bình</td>
      <td>8.1</td>
    </tr>
  </tfoot>
</table>
```

---

### 6️⃣ Form & Nhập liệu

| Thẻ | Chức năng | Ví dụ |
|-----|-----------|-------|
| `<form>` | Tạo biểu mẫu | `<form action="/submit" method="POST">` |
| `<input>` | Ô nhập liệu đa dạng | `<input type="text">` |
| `<textarea>` | Vùng nhập nhiều dòng | `<textarea rows="4">` |
| `<button>` | Nút bấm | `<button type="submit">Gửi</button>` |
| `<select>` | Danh sách chọn | `<select>` |
| `<option>` | Lựa chọn trong select | `<option value="vn">Việt Nam</option>` |
| `<label>` | Nhãn cho input | `<label for="name">Tên:</label>` |

```html
<!-- 📝 Form đăng ký đơn giản -->
<form action="/dang-ky" method="POST">

  <label for="ten">Họ và tên:</label>
  <input type="text" id="ten" name="ten" placeholder="Nguyễn Văn A" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="example@email.com">

  <label for="matkhau">Mật khẩu:</label>
  <input type="password" id="matkhau" name="matkhau" minlength="8">

  <label for="gioitinh">Giới tính:</label>
  <select id="gioitinh" name="gioitinh">
    <option value="nam">Nam</option>
    <option value="nu">Nữ</option>
    <option value="khac">Khác</option>
  </select>

  <label for="gioithieu">Giới thiệu bản thân:</label>
  <textarea id="gioithieu" name="gioithieu" rows="4" placeholder="Viết vài dòng..."></textarea>

  <label>
    <input type="checkbox" name="dongY"> Tôi đồng ý với điều khoản
  </label>

  <button type="submit">Đăng Ký</button>
  <button type="reset">Xoá Form</button>

</form>
```

#### 🎛️ Các `type` của `<input>`

| `type` | Hiển thị | Dùng cho |
|--------|---------|---------|
| `text` | Ô chữ 1 dòng | Tên, địa chỉ |
| `email` | Ô email | Kiểm tra @ tự động |
| `password` | Ô mật khẩu (•••) | Bảo mật |
| `number` | Ô số | Tuổi, số lượng |
| `date` | Bộ chọn ngày | Ngày sinh |
| `checkbox` | Hộp chọn ✓ | Đồng ý, sở thích |
| `radio` | Nút chọn ○ | Một trong nhiều |
| `file` | Tải file lên | Upload ảnh |
| `range` | Thanh kéo | Âm lượng, độ sáng |
| `color` | Bộ chọn màu | Cài đặt giao diện |
| `hidden` | Ẩn (không thấy) | Gửi dữ liệu ẩn |
| `submit` | Nút gửi | Thay thế `<button>` |

---

### 7️⃣ Bố cục & Container

| Thẻ | Chức năng | Khi nào dùng |
|-----|-----------|-------------|
| `<div>` | Container block chung | Bọc nhóm phần tử, áp dụng CSS |
| `<span>` | Container inline chung | Tô màu / style một đoạn chữ |
| `<header>` | Phần đầu trang/section | Logo, navbar |
| `<nav>` | Menu điều hướng | Thanh menu |
| `<main>` | Nội dung chính | Phần trung tâm trang |
| `<section>` | Một mục nội dung | Từng phần có tiêu đề |
| `<article>` | Bài viết độc lập | Blog post, tin tức |
| `<aside>` | Nội dung phụ | Sidebar, quảng cáo |
| `<footer>` | Phần chân trang | Bản quyền, liên kết |

```html
<!-- 🏗️ Cấu trúc trang web chuẩn -->
<body>
  <header>
    <nav>
      <a href="/">Trang chủ</a>
      <a href="/ve-chung-toi">Về chúng tôi</a>
    </nav>
  </header>

  <main>
    <section id="gioi-thieu">
      <h2>Giới thiệu</h2>
      <p>Chào mừng bạn!</p>
    </section>

    <section id="bai-viet">
      <article>
        <h3>Bài viết 1</h3>
        <p>Nội dung bài viết...</p>
      </article>
    </section>
  </main>

  <aside>
    <h4>Bài viết liên quan</h4>
    <ul>
      <li><a href="#">Bài 2</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2025 Website của tôi</p>
  </footer>
</body>
```

---

## 🟡 Thẻ HTML Ít Dùng

> Những thẻ này **có giá trị cao** trong các tình huống cụ thể. Biết chúng giúp code chuẩn và chuyên nghiệp hơn.

---

### 1️⃣ Văn bản đặc biệt

| Thẻ | Chức năng | Ví dụ kết quả |
|-----|-----------|--------------|
| `<abbr>` | Viết tắt (hover thấy nghĩa đầy đủ) | <abbr title="HyperText Markup Language">HTML</abbr> |
| `<cite>` | Trích dẫn tên tác phẩm | *Harry Potter* |
| `<q>` | Trích dẫn ngắn inline | "Trích dẫn" |
| `<blockquote>` | Trích dẫn dài, thụt lề | > Đoạn dài... |
| `<code>` | Đoạn code inline | `console.log()` |
| `<pre>` | Giữ nguyên định dạng (khoảng trắng, xuống dòng) | Khối code |
| `<kbd>` | Phím tắt bàn phím | `Ctrl+C` |
| `<mark>` | Tô sáng (highlight) văn bản | ==được tô vàng== |
| `<del>` | Văn bản bị xoá | ~~bị gạch ngang~~ |
| `<ins>` | Văn bản được thêm mới | _được gạch chân_ |
| `<sub>` | Chỉ số dưới | H₂O |
| `<sup>` | Chỉ số trên | x² |
| `<time>` | Ngày/giờ (semantic) | Hôm nay |
| `<address>` | Thông tin liên lạc | *italic address* |

```html
<!-- 🔤 Ví dụ văn bản đặc biệt -->

<!-- Viết tắt với tooltip -->
<p><abbr title="Cascading Style Sheets">CSS</abbr> giúp trang đẹp hơn.</p>

<!-- Highlight từ khoá -->
<p>Tìm thấy <mark>3 kết quả</mark> phù hợp.</p>

<!-- Công thức hoá học / toán học -->
<p>Nước là H<sub>2</sub>O, diện tích hình tròn là πr<sup>2</sup></p>

<!-- Code snippet -->
<p>Dùng <code>console.log("Hello")</code> để in ra màn hình.</p>

<!-- Khối code nhiều dòng -->
<pre><code>
function chao(ten) {
  return "Xin chào, " + ten + "!";
}
</code></pre>

<!-- Trích dẫn -->
<blockquote cite="https://example.com">
  "Học không bao giờ là đủ."
</blockquote>

<!-- Phím tắt -->
<p>Nhấn <kbd>Ctrl</kbd> + <kbd>S</kbd> để lưu file.</p>

<!-- Ngày tháng semantic -->
<p>Bài đăng ngày <time datetime="2025-04-21">21 tháng 4, 2025</time></p>

<!-- Văn bản thêm/xoá (dùng trong diff, chỉnh sửa) -->
<p>Giá: <del>500.000đ</del> <ins>350.000đ</ins></p>
```

---

### 2️⃣ Nhúng nội dung

| Thẻ | Chức năng | Dùng cho |
|-----|-----------|---------|
| `<iframe>` | Nhúng trang web khác | Google Maps, YouTube |
| `<video>` | Nhúng video | File .mp4, .webm |
| `<audio>` | Nhúng âm thanh | File .mp3, .wav |
| `<source>` | Nguồn media (dùng trong video/audio) | Nhiều định dạng |
| `<canvas>` | Vẽ đồ hoạ bằng JavaScript | Game, biểu đồ |
| `<svg>` | Đồ hoạ vector | Icon, logo |
| `<picture>` | Ảnh responsive nhiều nguồn | Tối ưu hiệu suất |

```html
<!-- 🎬 Video -->
<video width="640" controls autoplay muted loop>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Trình duyệt không hỗ trợ video.
</video>

<!-- 🎵 Audio -->
<audio controls>
  <source src="nhac.mp3" type="audio/mpeg">
  Trình duyệt không hỗ trợ audio.
</audio>

<!-- 🗺️ Nhúng Google Maps -->
<iframe
  src="https://www.google.com/maps/embed?..."
  width="600"
  height="400"
  loading="lazy"
  allowfullscreen>
</iframe>

<!-- 📺 Nhúng YouTube -->
<iframe
  width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen>
</iframe>

<!-- 🖼️ Ảnh responsive (srcset) -->
<picture>
  <source media="(max-width: 600px)" srcset="anh-nho.jpg">
  <source media="(min-width: 601px)" srcset="anh-lon.jpg">
  <img src="anh-mac-dinh.jpg" alt="Ảnh responsive">
</picture>
```

---

### 3️⃣ Semantic nâng cao

| Thẻ | Chức năng |
|-----|-----------|
| `<figure>` | Bọc hình ảnh/media có chú thích |
| `<figcaption>` | Chú thích cho `<figure>` |
| `<details>` | Nội dung có thể thu/mở |
| `<summary>` | Tiêu đề của `<details>` |
| `<dialog>` | Hộp thoại (modal) |
| `<template>` | HTML ẩn, dùng bằng JavaScript |
| `<slot>` | Vị trí chèn nội dung (Web Components) |
| `<datalist>` | Gợi ý khi nhập input |
| `<fieldset>` | Nhóm các phần tử form |
| `<legend>` | Tiêu đề cho `<fieldset>` |
| `<output>` | Kết quả tính toán |
| `<progress>` | Thanh tiến trình |
| `<meter>` | Đo lường trong phạm vi |

```html
<!-- 🖼️ Hình ảnh với chú thích -->
<figure>
  <img src="bien-nha-trang.jpg" alt="Biển Nha Trang">
  <figcaption>📍 Bãi biển Nha Trang vào buổi sáng</figcaption>
</figure>

<!-- 📂 Accordion (thu/mở) -->
<details>
  <summary>🤔 HTML là gì?</summary>
  <p>HTML (HyperText Markup Language) là ngôn ngữ đánh dấu dùng để tạo trang web.</p>
</details>

<details>
  <summary>🤔 CSS là gì?</summary>
  <p>CSS (Cascading Style Sheets) dùng để định dạng giao diện trang web.</p>
</details>

<!-- 📊 Thanh tiến trình -->
<p>Tiến độ học tập:</p>
<progress value="65" max="100">65%</progress>

<!-- 🌡️ Đo lường -->
<p>Pin: <meter value="0.7" min="0" max="1" low="0.2" high="0.8">70%</meter></p>

<!-- 📝 Nhóm form -->
<fieldset>
  <legend>Thông tin cá nhân</legend>
  <label>Tên: <input type="text"></label><br>
  <label>Tuổi: <input type="number"></label>
</fieldset>

<!-- 💡 Gợi ý autocomplete -->
<input list="ngon-ngu" placeholder="Nhập ngôn ngữ...">
<datalist id="ngon-ngu">
  <option value="HTML">
  <option value="CSS">
  <option value="JavaScript">
  <option value="Python">
</datalist>

<!-- 🧮 Output tính toán -->
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0"> +
  <input type="number" id="b" value="0"> =
  <output name="result" for="a b">0</output>
</form>
```

---

### 4️⃣ Tương tác & Media

| Thẻ | Chức năng | Ghi chú |
|-----|-----------|---------|
| `<dialog>` | Hộp thoại native HTML | Cần JS để mở/đóng |
| `<canvas>` | Vẽ 2D/3D bằng JS | Game, biểu đồ tùy chỉnh |
| `<map>` | Bản đồ ảnh (image map) | Vùng click trên ảnh |
| `<area>` | Vùng click trong `<map>` | Hình chữ nhật, tròn |
| `<track>` | Phụ đề cho video | File .vtt |
| `<wbr>` | Gợi ý ngắt dòng | Từ dài không có khoảng trắng |
| `<bdi>` | Tách hướng văn bản | Trộn LTR/RTL |
| `<ruby>` | Chú âm (phiên âm) | Chữ Hán, Nhật, Hàn |
| `<rt>` | Phiên âm trong `<ruby>` | Ký tự nhỏ trên chữ |

```html
<!-- 💬 Hộp thoại (Dialog) -->
<dialog id="hopThoai">
  <h2>Thông báo</h2>
  <p>Bạn có chắc muốn xoá không?</p>
  <button onclick="document.getElementById('hopThoai').close()">Đóng</button>
</dialog>
<button onclick="document.getElementById('hopThoai').showModal()">Mở hộp thoại</button>

<!-- 🎌 Ruby (phiên âm tiếng Nhật) -->
<ruby>
  東京 <rt>Tokyo</rt>
</ruby>

<!-- 🎬 Video với phụ đề -->
<video controls>
  <source src="phim.mp4" type="video/mp4">
  <track kind="subtitles" src="phu-de.vtt" srclang="vi" label="Tiếng Việt" default>
</video>
```

---


## 💡 Mẹo Ghi Nhớ

### 🧠 Nhóm theo mục đích

```
📦 CẤU TRÚC    → html, head, body, header, main, footer, nav, section, article, aside, div
📝 VĂN BẢN     → h1-h6, p, span, strong, em, br, hr, blockquote, pre, code
🔗 LIÊN KẾT    → a, img, link
📋 DANH SÁCH   → ul, ol, li, dl, dt, dd
📊 BẢNG        → table, thead, tbody, tfoot, tr, th, td
📬 FORM        → form, input, textarea, button, select, option, label
🎬 MEDIA       → video, audio, iframe, canvas, svg, picture
🔍 SEMANTIC    → figure, figcaption, details, summary, time, mark, abbr
```


### ✅ Checklist trang HTML hoàn chỉnh

- [ ] `<!DOCTYPE html>` ở dòng đầu
- [ ] `<html lang="vi">` có thuộc tính ngôn ngữ
- [ ] `<meta charset="UTF-8">` trong `<head>`
- [ ] `<meta name="viewport" ...>` cho responsive
- [ ] `<title>` có nội dung mô tả
- [ ] Tất cả `<img>` có thuộc tính `alt`
- [ ] Chỉ có **1 thẻ `<h1>`** trên mỗi trang
- [ ] `<label>` liên kết với `<input>` qua `for` / `id`
- [ ] Cấu trúc semantic: `header`, `main`, `footer`

---

> 📖 **Tài liệu tham khảo thêm:**
> - [MDN Web Docs](https://developer.mozilla.org/vi/docs/Web/HTML) – Tài liệu HTML đầy đủ nhất
> - [W3Schools HTML](https://www.w3schools.com/html/) – Học kèm thực hành
> - [HTML Reference](https://htmlreference.io/) – Tra cứu trực quan

---

