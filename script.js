function upDate(previewPic) {
    // Tìm đến cái khung xám to đùng có id="image"
    let displayBox = document.getElementById("image");

    // Đổi chữ thành nội dung alt của ảnh nhỏ
    displayBox.innerHTML = previewPic.alt;

    // Đổi ảnh nền thành đường dẫn src của ảnh nhỏ
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let displayBox = document.getElementById("image");

    // Xóa ảnh nền đi khi rụt chuột ra
    displayBox.style.backgroundImage = "url('')";

    // Trả lại chữ mặc định ban đầu
    displayBox.innerHTML = "Hover over an image below to display here.";
}
// Hàm upDate và undo giữ nguyên logic cũ nhưng hỗ trợ cả chuột lẫn phím Tab
function upDate(previewPic) {
    console.log("Event triggered! Focus or mouse enter.");
    let displayBox = document.getElementById("image");
    displayBox.innerHTML = previewPic.alt;
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Event triggered! Blur or mouse leave.");
    let displayBox = document.getElementById("image");
    displayBox.style.backgroundImage = "url('')";
    displayBox.innerHTML = "Hover over an image below to display here.";
}

/* ==========================================
   Step 8 & 9: Viết hàm thiết lập thuộc tính khi trang tải xong (onload)
   ========================================== */
function addTabFocusAttribute() {
    console.log("Page loaded successfully! Initializing gallery components."); // Yêu cầu 9.a

    // Lấy toàn bộ các thẻ img nằm bên trong class .preview-gallery
    let images = document.querySelectorAll(".preview-gallery img");

    // Vòng lặp duyệt qua từng bức ảnh một (Yêu cầu 9.b)
    for (let i = 0; i < images.length; i++) {
        // Đảm bảo thuộc tính tabindex luôn được gán bằng code (Yêu cầu 9.c)
        images[i].setAttribute("tabindex", "0");
        
        // Thêm một lớp viền làm nổi bật ảnh khi dùng phím điều hướng đến
        images[i].addEventListener("focus", function() {
            this.style.outline = "4px solid #f1c40f";
        });
        images[i].addEventListener("blur", function() {
            this.style.outline = "none";
        });
    }
}

// Kích hoạt hàm addTabFocusAttribute ngay khi trang web tải xong (Yêu cầu bước 8)
window.onload = addTabFocusAttribute;