var posts=["2024/09/21/hello-world/","2025/01/26/md文件是什么/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };