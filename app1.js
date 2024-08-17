// Dashboard
document.getElementById('addPostBtn').addEventListener('click', function() {
    const img = prompt('Enter image URL');
    const name = prompt('Enter name');
    const description = prompt('Enter description');
  
    if (img && name && description) {
        const postContainer = document.createElement('div');
        postContainer.className = 'post-container';
        
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        
        postItem.innerHTML = `
            <img src="${img}" alt="Post Image">
            <h2>${name}</h2>
            <p>${description}</p>
            <button onclick="deletePost(this)">Delete Post</button>
        `;
        
        postContainer.appendChild(postItem);
        document.getElementById('posts').appendChild(postContainer);
    } else {
        alert('All fields are required!');
    }
  });
  
  function deletePost(button) {
    const postContainer = button.parentNode.parentNode;
    postContainer.remove();
  }