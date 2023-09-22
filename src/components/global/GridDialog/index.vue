<template>
  
    <transition>
      <div class="modal-container">
        <div class="modal-body">
          <span class="modal-close" @click="closing">🗙</span>
          <h3>هل تريد حذف حساب بنكى</h3>
          <div class="modal-action">
            <button class="modal-button" type="submit" @click="Confirm">إضافة</button>
            <button class="modal-button-close" @click="closing">إلغاء</button>
          </div>
        </div>
      </div>
      </transition>
    </template>
    
    <script  lang="ts">  
    import { defineComponent} from "vue";
      export default defineComponent({
        emits: ["confirm","cancel"],
  
      setup(_,context){
        const Confirm =(() => {
        context.emit("confirm");
      });
          const closing = (() => {
        context.emit("cancel");
      });
      return{
          closing,Confirm
      }
      }
    })
    </script>
    
    <style lang="scss" scoped>
      .modal-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #40404091;
        position: fixed;
      z-index: 999;
      width: 100%;
      text-align: center;
      }
      .modal-container .modal-body {
        background-color: #fff;
        border-radius: 10px;
        text-align: center;
        padding: 20px 40px;
        flex-direction: column;
        border: 0px;
      min-width: 35%;
      flex: inherit;
      padding: 30px 73px;
      direction: ltr;
      text-align: right;
      width: 30%;
      h3{
        text-align: center;
        color:#f44336;
    font-size: 23px;
    margin-bottom: 30px;
      }
      }
      .modal-action {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
      .modal-button,.modal-button-close {
        cursor: pointer;
      padding: 9px 36px;
        border: 2px solid #f44336;
        border-radius: 5px;
        background-color: #f44336;
        color: #fff;
      }
      .modal-button-close {
        border: 2px solid #d0d0d0;
        background-color: #fafbfd;
        color: #000;
      }
      .modal-close {
      cursor: pointer;
      position: relative;
      align-self: end;
      right: -33px;
      top: -17px;
      color: #aaa;
      background: #fafbfd;
      padding: 4px 6px;
      border-radius: 5px;
      border: 1px solid;
  
      }
      .body{    
          direction: rtl;
          padding: 0px;
      display: inline-block;
      margin-bottom: 20px;
      label{
          display: block;
      }
      .fv-row {
          display: inline-block;
      width: 48%;
      margin-left: 10px;
      margin-bottom: 20px;
      }
      input,select{
          width: 100%;
      border: 1px solid #aaa;
      padding: 8px;
      border-radius: 8px;
      &:focus-visible{
          outline: 0px;
      }
      }
      }
      .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
    </style>