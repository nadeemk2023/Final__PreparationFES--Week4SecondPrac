const userId = localStorage.getItem('userId');
const postListEl = document.querySelector('.post-list');

async function getUserPosts(userId) {
  try {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const postsData = await posts.json();
    if (postsData.length === 0) {
      alert(
        'An error occured while fetching posts for this user. Redirecting to homepage'
      );
      window.location.href = `${window.location.origin}/index.html`;
    }

    postListEl.innerHTML = postsData.map(post => postsHTML(post)).join('');
  } catch (error) {
    console.error('Error fetching posts', error);
    alert(
      'An error occured while fetching posts for this user. Redirecting to homepage'
    );
    window.location.href = `${window.location.origin}/index.html`;
  }
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

function searchUserPosts(event) {
  const newUserId = event.target.value;
  localStorage.setItem('userId', newUserId);
  getUserPosts(newUserId);
}

getUserPosts(userId);
