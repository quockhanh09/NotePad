<template>
    <div class="modal">
      <div class="modal-content">
     
        
      </div>
    </div>
  </template>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Màu xám mờ */
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    pointer-events: auto; /* Bật sự kiện trỏ vào nội dung modal */
  user-select: none; /* Ngăn người dùng chọn nội dung bên trong modal */
  max-width: 80%; /* Giới hạn chiều rộng của modal-content */
  max-height: 80%;
  }

  
  </style>
  