document.getElementById('openAuthorModal').addEventListener('click', function (e) {
    const AuthorModal = new bootstrap.Modal(document.getElementById('AuthorModal'));
    AuthorModal.show(); // Hiển thị modal chọn tác giả
});