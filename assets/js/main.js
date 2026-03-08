const tagBadges = document.querySelectorAll('.tag-badge');

tagBadges.forEach(badge => {
  badge.addEventListener('click', function(e){
    e.preventDefault(); // agar link # tidak scroll ke atas
    const tag = badge.textContent.trim().toLowerCase().replace(/\s+/g, '-'); // ambil nama tag
    filterPosts(tag);
  });
});

function filterPosts(tag) {
  const posts = document.querySelectorAll('.portfolio-item');

  posts.forEach(post => {
    if(tag === "all"){
      post.style.display = "block";
      return;
    }

    if(post.classList.contains("tag-" + tag)){
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}
