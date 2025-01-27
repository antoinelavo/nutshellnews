// post.js
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postFileName = urlParams.get('post'); // Get the post file name from the URL (e.g., ?post=post1.md)
    
    if (postFileName) {
      fetch(`./posts/${postFileName}`)
        .then(response => response.text())
        .then(markdownText => {
          const htmlContent = marked.parse(markdownText);
  
          document.getElementById('post-content').innerHTML = htmlContent;
  
          const postTitle = postFileName.replace('.md', '').replace('-', ' ').toUpperCase();
          document.getElementById('post-title').textContent = postTitle;
        })
        .catch(err => console.error('Error loading the post:', err));
    } else {
      console.error('No post file specified.');
    }
  });
  