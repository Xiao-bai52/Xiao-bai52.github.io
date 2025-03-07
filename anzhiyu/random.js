var posts=["2022/12/07/Docker容器、防火墙、Redis、Ngnix/","2025/03/07/hello-world/","2022/11/04/linux常用命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };