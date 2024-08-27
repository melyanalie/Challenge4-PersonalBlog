document.addEventListener('DOMContentLoaded', function() {
  const postList = document.getElementById('postList');
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  blogPosts.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><strong>Posted by:</strong> ${post.username}</p>`;
      postList.appendChild(li);
  });
});
