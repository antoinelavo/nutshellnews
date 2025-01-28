document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postFileName = urlParams.get('post'); // Get the post file name from the URL (e.g., ?post=post1.md)
  
  if (postFileName) {
    // Generate a human-readable post title
    const postTitle = postFileName.replace('.md', '').replace(/-/g, ' ');

    // Set the page title dynamically
    document.title = postTitle;

    fetch(`./posts/${postFileName}`)
      .then(response => response.text())
      .then(markdownText => {
        const htmlContent = marked.parse(markdownText);

        // Render the post content
        document.getElementById('post-content').innerHTML = htmlContent;

        // Optionally update a title in the body if you have a specific element for it
        const postTitleElement = document.getElementById('post-title');
        if (postTitleElement) {
          postTitleElement.textContent = postTitle;
        }

        // Extract the first sentence/paragraph from the Markdown content for the meta description
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const firstParagraph = tempDiv.querySelector('p')?.textContent || 'Default meta description';

        // Dynamically update the meta description
        document.querySelector('meta[name="description"]').setAttribute('content', firstParagraph);
      })
      .catch(err => console.error('Error loading the post:', err));
  } else {
    console.error('No post file specified.');
  }
});
