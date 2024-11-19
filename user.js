const userId = localStorage.getItem('userId');
const postListEl = document.querySelector('.post-list');

async function getUserPosts(userId) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const postsData = await posts.json();

  postListEl.innerHTML = postsData.map(post => postsHTML(post)).join('');
}

function postsHTML(post) {
  return `<div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`;
}

getUserPosts(userId);
