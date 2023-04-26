function copyMenu (){
    var dptCategory = document.querySelector('.dpt-cat');
    var dptplace = document.querySelector('.departments');
    dptplace.innerHTML = dptCategory.innerHTML;
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu() ; 

const submenus = document.querySelectorAll('.has-child .icon-small');
submenus.forEach((menu) => menu.addEventListener('click',toggle));

function toggle(e) {
  e.preventDefault();
  
  // Loại bỏ class 'expanded' khỏi tất cả các phần tử có class 'has-child' trừ phần tử hiện tại
  submenus.forEach((item) => {
    if (item !== this) {
      item.closest('.has-child').classList.remove('expanded');
    }
  });

  // Thêm hoặc loại bỏ class 'expand' của phần tử hiện tại
  this.closest('.has-child').classList.toggle('expanded');
}



