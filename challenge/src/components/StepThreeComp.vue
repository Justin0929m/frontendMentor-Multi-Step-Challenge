<template>
    <div class="main-container">
      
      <div class="container">
        <div class="sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-img" width="274" height="568" fill="none" viewBox="0 0 274 568"><rect width="274" height="568" fill="#483EFF" rx="10"/><mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><rect width="274" height="568" fill="#fff" rx="10"/></mask><g mask="url(#a)"><path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g></svg>
          <div class="steps-container">
            <div class="steps">
              <div class="not-active">1</div>
              <div>
                <h1 class="step-text">Step 1</h1>
                <p class="step-title">Your info</p>
              </div>
            </div>
            <div class="steps">
              <div class="not-active">2</div>
              <div>
                <h1 class="step-text">Step 2</h1>
                <p class="step-title">Select plan</p>
              </div>
            </div>
            <div class="steps">
              <div class="number">3</div>
              <div>
                <h1 class="step-text">Step 3</h1>
                <p class="step-title">Add-ons</p>
              </div>
            </div>
            <div class="steps">
              <div class="not-active">4</div>
              <div>
                <h1 class="step-text">Step 4</h1>
                <p class="step-title">Summary</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main-section">
          <h1 class="main-title">Personal info</h1>
          <p class="main-text">Please provide your name, email address, and phone number.</p>
  
          <form class="form">
              <label for="name">Name</label>
              <input type="text" name="name" placeholder="e.g. Stephen King">
              <label for="email">Email Address</label>
              <input type="text" name="email" placeholder="e.g. stephenking@lorem.com">
              <label for="number">Phone Number</label>
              <input type="text" name="number" placeholder="e.g. +1 234 567 890">
          </form>
          <div class="form-control">
          <router-link to="/plan" class="form-btn-back">Go Back</router-link>
          <router-link to="/summary" class="form-btn-next">Next Step</router-link>
        </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  
  
  </script>
  
  <style lang="scss" scoped>
  @import '@/styles/main.scss';
  .main-container{
  @include displayFlexCenter
  }
  
  .container{
  display: flex;
  max-width: 100%;
  background-color: $white;
  border-radius: 10px;
  padding: 1rem;
  }
  
  .main-section{
  padding: 2rem 3rem 0 5rem;
  position: relative;
  }
  
  .sidebar{
  position: relative;
  }
  
  .sidebar-img{
  width: 100%;
  }
  
  .steps-container{
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: 0;
  margin: 2rem;
  color: #fff;
  width: 100%;
  }
  
  .steps{
  display: flex;
  margin-block: 1rem;
  }
  
  .step-text{
  color: $ligtGray;
  font-size: .7rem;
  font-weight: 400;
  text-transform: uppercase;
  }
  
  .step-title{
  text-transform: uppercase;
  }
  
  .number{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $pastelBlue;
  border-radius: 50px;
  aspect-ratio: 1 / 1;
  width: 11%;
  height: 11%;
  margin-right: 1rem;
  }
  
  .not-active{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid $white;
  border-radius: 50px;
  aspect-ratio: 1 / 1;
  width: 11%;
  height: 11%;
  margin-right: 1rem;
  }
  
  .form{
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  }
  
  input{
  border-radius: 5px;
  padding: .5rem;
  margin-block: 1rem;
  }
  
  .form-control{
  display: flex;
  justify-content: space-between;
  margin: 7rem 0 0 0;
  }
  .form-btn-next{
  background-color: $marinaBlue;
  color: #fff;
  border: none;
  padding: .7rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
}

.form-btn-back{
  background-color: transparent;
  border: none;
  padding: .7rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
}
 </style>