import { Link } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Stullar",
      image: "https://htmldemo.net/dkoor/dkoor/assets/images/blog/1.jpg",
      date: "17 yanvar 2023",
      commentCount: 0,
      content:
        "Lorem ipsumtetur rem. Repellendus illum aperiam deleniti quidem voluptatum?",
    },
    {
      id: 2,
      title: "Uşaqlar üçün",
      image: "https://htmldemo.net/dkoor/dkoor/assets/images/blog/2.jpg",
      date: "17 yanvar 2023",
      commentCount: 0,
      content:
        "Lorem ipsumtetur rem. Repellendus illum aperiam deleniti quidem voluptatum?",
    },
    {
      id: 3,
      title: "Təbii",
      image: "https://htmldemo.net/dkoor/dkoor/assets/images/blog/4.jpg",
      date: "17 yanvar 2023",
      commentCount: 0,
      content:
        "Lorem ipsumtetur rem. Repellendus illum aperiam deleniti quidem voluptatum?",
    },
    {
      id: 4,
      title: "Teknoloji Trendleri",
      image: "https://htmldemo.net/dkoor/dkoor/assets/images/blog/5.jpg",
      date: "18 yanvar 2023",
      commentCount: 0,
      content:
        "Lorem ipsumtetur rem. Repellendus illum aperiam deleniti quidem voluptatum?",
    },
    {
      id: 5,
      title: "Sağlıklı Yaşam İpuçları",
      image: "https://htmldemo.net/dkoor/dkoor/assets/images/blog/6.jpg",
      date: "18 yanvar 2023",
      commentCount: 0,
      content:
        "Lorem ipsumtetur rem. Repellendus illum aperiam deleniti quidem voluptatum?",
    },
    // Daha fazla blog ekleme
  ]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div data-aos="fade-up" className="latest_blog container">
      {currentPosts.map((post) => (
        <div key={post.id}>
          <div>
            <img src={post.image} alt="" />
          </div>
          <h3>
            <a>{post.title}</a>
          </h3>
          <div className="vcs">
            <span>{post.date} </span> / <span>{post.commentCount} şərh</span>
          </div>
          <p>{post.content}</p>
          <Link to={`/blog/${post.id}`}>Daha çoxuna bax</Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
