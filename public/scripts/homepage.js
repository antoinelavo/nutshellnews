// Path to your posts list
const postsFile = './posts.json';

// Get the divs where the links will be displayed
const latestNewsDiv = document.getElementById('latest-news-list');
const quickFactsDiv = document.getElementById('quick-facts-list');

// Function to create the homepage with two different categories
function createHomepage() {
  fetch(postsFile)  // Fetch the posts list from the JSON file
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
      // Display the "Latest News" posts
      if (data.latestNews && Array.isArray(data.latestNews)) {
        data.latestNews.forEach(post => {
          // Create category element
          const category = document.createElement('h6');
          category.textContent = post.category.toUpperCase();  // Set category text
          category.classList.add('post-category');  // Add class for styling

          // Create a link for the post
          const postLink = document.createElement('a');
          postLink.href = `post.html?post=${post.title}`;
          postLink.textContent = post.title.replace('.md', '').replace('-', ' ');
          postLink.classList.add('post-link');  // Add class for styling

          // Create pretext element
          const pretext = document.createElement('p');
          pretext.textContent = post.pretext.toUpperCase();  // Set pretext content
          pretext.classList.add('post-pretext');  // Add class for styling

          // Append category, pretext, and link to the latest news div
          latestNewsDiv.appendChild(category);
          latestNewsDiv.appendChild(pretext);
          latestNewsDiv.appendChild(postLink);
        });
      }

      // Display the "Quick Facts" posts
      if (data.quickFacts && Array.isArray(data.quickFacts)) {
        data.quickFacts.forEach(post => {
          // Create category element
          const category = document.createElement('h6');
          category.textContent = post.category.toUpperCase();  // Set category text
          category.classList.add('post-category');  // Add class for styling

          // Create a link for the post
          const postLink = document.createElement('a');
          postLink.href = `post.html?post=${post.title}`;
          postLink.textContent = post.title.replace('.md', '').replace('-', ' ');
          postLink.classList.add('post-link');  // Add class for styling

          // Create pretext element
          const pretext = document.createElement('p');
          pretext.textContent = post.pretext.toUpperCase();  // Set pretext content
          pretext.classList.add('post-pretext');  // Add class for styling

          // Append category, pretext, and link to the quick facts div
          quickFactsDiv.appendChild(category);
          quickFactsDiv.appendChild(pretext);
          quickFactsDiv.appendChild(postLink);
        });
      }
    })
    .catch(err => console.error('Error fetching posts:', err));
}

createHomepage();
