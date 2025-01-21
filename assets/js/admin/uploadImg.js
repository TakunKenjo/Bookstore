function previewFile() {
    const fileInput = document.getElementById('uploadImage');
    const previewImage = document.getElementById('previewImage');
    const placeholderText = document.getElementById('placeholderText');
  
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
        placeholderText.style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  }
  