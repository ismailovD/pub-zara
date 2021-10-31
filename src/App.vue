<template>
  <div id="app">
       
        <router-view></router-view>
    
  </div>
  
</template>

<script>
export default {
  
};
</script>

<style scoped>


  .title {  
        color: #473e9e;
        font-size: 48px  ;
        text-align: center;
        margin-bottom: 50px;
    }
     
 .buttons {
        display: flex;
        justify-content: center;
    }

    .btns {
        min-width: 170px;
        border: 2px solid #918bc5;
        text-decoration: none;
        text-transform: uppercase;
        color: #918bc5;
        text-align: center;
        border-radius: 5px;
        line-height: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: 600;
    }
    .btns:first-child {
        margin-right: 30px;
    }

    .btns:hover {
        background: #ee2654;
        border:  2px solid #ee2654;
        color: #fff;
    }

    .checks {
        display: flex;
        justify-content: center;
    }

    .input {
        border: 1px solid #e7e5f4;
        border-radius: 4px;
        padding: 15px 30px;
        background: #fff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    } 
    .inp {
        display: none;
    } 
    .circle{
         content: '';
         width: 20px;
         height: 20px;
         border-radius: 50%;
         background: #fff;
         border: 1px solid #e7e5f4;
         display: block;
         opacity: 1;
         position: relative;
    }

    .circle::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #fff;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    .inp:checked + .circle{  
         background: #473e9e;
         border: 2px solid #fff;  
    }
     .input.active{  
         background: #473e9e; 
         color: #fff;
    }
    .inp:checked + .circle::after{ 
         opacity: 1;
    }

   
    .other {
        width: 100%;
        border: none;
        background: #e7e5f4;
        padding:15px 30px;
        border-radius: 4px; 
    }
    .other:focus {
        outline: 1px solid #473e9e;
        background: #fff;
        color: #000;
    }

    .other::placeholder {
        color: #9b96cb;
    }
</style>
