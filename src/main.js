 const elHamburger = document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector("#mobile-nav").classList.toggle("hidden")
 })
 window.addEventListener("scroll", () => {
  document.querySelector("#mobile-nav").classList.add("hidden")
 })


 const elDesign = document.querySelector("#design");
 const elDesignContent = document.querySelector("#design-image");
 const elVideo = document.querySelector("#video");
 const elVideoContent = document.querySelector("#adver-videos")
 const elAllContent = document.querySelector("#all-content");


 elDesign.addEventListener("click", () => {
   elVideo.classList.remove("active");
   elDesign.classList.add("active");
   elDesignContent.classList.add("grid");
   elDesignContent.classList.remove("hidden");
   elVideoContent.classList.remove("grid");
   elVideoContent.classList.add("hidden")
 })
 elVideo.addEventListener("click", () => {
  elDesign.classList.remove("active");
  elVideo.classList.add("active");
  elDesignContent.classList.add("hidden");
  elDesignContent.classList.remove("grid");
  elVideoContent.classList.remove("hidden");
  elVideoContent.classList.add("grid");
 })
 elAllContent.addEventListener("click", () => {
  elVideo.classList.remove("active");
  elDesign.classList.remove("active");
  elVideoContent.classList.remove("hidden");
  elVideoContent.classList.add("grid");
  elDesignContent.classList.remove("hidden");
  elDesignContent.classList.add("grid");
 })
