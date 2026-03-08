// document.addEventListener("DOMContentLoaded", function(){

//   const buttons = document.querySelectorAll(".filter-btn");
//   const items = document.querySelectorAll(".portfolio-item");

//   buttons.forEach(btn => {

//     btn.addEventListener("click", () => {

//       const filter = btn.dataset.filter;

//       buttons.forEach(b => b.classList.remove("active"));
//       btn.classList.add("active");

//       items.forEach(item => {

//         const tags = item.dataset.tags;

//         if(filter === "all" || tags.includes(filter)){
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }

//       });

//     });

//   });

// });

// function filterPosts(tag) {
//   const posts = document.querySelectorAll('.portfolio-item');

//   posts.forEach(post => {
//     if(tag === "all"){
//       post.style.display = "block";
//       return;
//     }

//     if(post.classList.contains("tag-" + tag)){
//       post.style.display = "block";
//     } else {
//       post.style.display = "none";
//     }
//   });
// }
