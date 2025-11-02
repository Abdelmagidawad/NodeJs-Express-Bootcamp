const outPut = document.querySelector(".output");
const getBtn = document.querySelector(".get-posts-btn");
const form = document.querySelector(".add-post-form");

async function showPosts() {
  try {
    let res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to Fetch Posts");
    }
    let posts = await res.json();

    outPut.innerHTML = "";
    posts.forEach((post) => {
      outPut.innerHTML += `
          <div>${post.title}</div>
        `;
    });
  } catch (error) {
    console.log("Error Fetching Posts:", error);
  }
}

async function addPost(e) {
  e.preventDefault();
  //
  const formData = new FormData(this);
  const title = formData.get("title");
  //
  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to add Post");
    }

    let newPost = await res.json();

    showPosts();
  } catch (error) {
    console.error("Error adding Post", error);
  }
}

getBtn.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
