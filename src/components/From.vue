<template>
  <section class="modal" >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              @click="handleClose"
              aria-label="Close"
              fdprocessedid="r7wosx"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="languageModalLabel">Select Your Language</h4>
          </div>
          <div class="modal-body" id="languageContent">
            <ul>
                <li><a href="https://anotepad.com">English</a></li>
            <li><a href="https://anotepad.com/language/de">Deutsch</a></li>
            <li><a href="https://anotepad.com/language/es">Español</a></li>
            <li><a href="https://anotepad.com/language/fr">Français</a></li>
            <li><a href="https://anotepad.com/language/id">Bahasa Indonesia</a></li>
            <li><a href="https://anotepad.com/language/it">Italiano</a></li>
            <li><a href="https://anotepad.com/language/pt">Português</a></li>
            <li><a href="https://anotepad.com/language/vi">Tiếng Việt</a></li>
            <li><a href="https://anotepad.com/language/tr">Türkçe</a></li>
            <li><a href="https://anotepad.com/language/ru">Русский</a></li>
            <li><a href="https://anotepad.com/language/th">ภาษาไทย</a></li>
            <li><a href="https://anotepad.com/language/ko">한국어</a></li>
            <li><a href="https://anotepad.com/language/cn">中文(简体)</a></li>
            <li><a href="https://anotepad.com/language/tw">中文(繁體)</a></li>
            <li><a href="https://anotepad.com/language/jp">日本語</a></li>
            </ul>
          </div>
        </div>
      </section>

  </template>
  
  <script>
  
  export default {
    props: ['handleClose'],
    data() {
      return {
        isModalVisible: false
      }
    },
    
    
  }
  </script>
  
  <style scoped>
  .modal-content {
    position: relative;
    border-radius: 6px;
    width: 550px;
    height: 400px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    pointer-events: auto;
  }
  
  .modal-header {
    padding-bottom: 18px;
    font-size: 18px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px; /* Thêm margin-bottom để tạo khoảng cách với ul */
  }
  
  #languageContent ul {
    column-count: 2;
    padding-left: 10px;
  }
  
  #languageContent li {
    line-height: 200%;
    list-style: none;
  }
  
  .modal-body {
    position: relative;
    padding-bottom: 15px;
  }
  
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  
  li {
    display: list-item;
  }
  
  a {
    color: #10589b;
    font-size: 14.5px;
  }
  
  a:hover {
    color: #337ab7;
    text-decoration: none;
  }
  
  h4 {
    font-size: 18px;
    color: #000;
    margin: 0; /* Loại bỏ margin top và bottom */
  }
  
  button.close {
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
    float: right; /* Đặt button sang bên phải */
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
  }
  
  .close:hover {
    color: #000;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
  </style>
  