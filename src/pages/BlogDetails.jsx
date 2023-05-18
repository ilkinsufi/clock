import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";

function BlogDetails() {
  let { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
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
  const notify = () =>
    toast.success("Link Koyalandı", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function copy() {
    navigator.clipboard.writeText(window.location.href);
    notify();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = { name, email, message };
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setMessage("");
  }

  useEffect(() => {
    // Burada localStorage'a "comments" adıyla kaydedeceğimiz veriyi oluşturuyoruz
    const serializedComments = JSON.stringify(comments);
    localStorage.setItem("comments", serializedComments);
  }, [comments]);

  useEffect(() => {
    // localStorage'dan "comments" verisini okuyoruz
    const serializedComments = localStorage.getItem("comments");
    if (serializedComments) {
      const parsedComments = JSON.parse(serializedComments);
      setComments(parsedComments);
    }
  }, []);

  const blog = posts.find((a) => a.id == +id);
  console.log(blog);

  return (
    <div>
      <ScrollToTop smooth />
      <ScrollToTop2 smooth />

      <div className="d__header">
        <Link to="/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <Link to="/blog">Bloq</Link>
        <span> / </span>
        <span>{blog.title}</span>
      </div>
      <div className="container detaa">
        <img src={blog.image} alt="" />
        <h2 className="fds">{blog.title}</h2>
        <div className="vcs">
          <span>{blog.date}</span> / <span>Admin</span>
        </div>
        <div className="fdsf45">{blog.content}</div>
        <div className="fdswere">
          <li className="asdf">
            <div className="asFace" onClick={copy}></div>
            <div className="astwi" onClick={copy}></div>
            <div className="asreddi" onClick={copy}></div>
          </li>
        </div>
        <div className="fdsf45">
          {comments.map((comment, index) => (
            <div className="fdsfdwwe" key={index}>
              <p>
                <strong>{comment.name}</strong>
              </p>
              <p>
                <em>{comment.email}</em>
              </p>
              <p className="cliencomment">{comment.message}</p>
            </div>
          ))}
        </div>
        <h3 className="leavecomment">Şərhinizi qeyd edin</h3>
        <form onSubmit={handleSubmit} className="gdsdwq">
          <div className="forinput">
            <input
              required
              type="text"
              placeholder="Ad"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            required
            className="textareaaa"
            placeholder="Mesajınızı qeyd edin"
            rows="13"
            cols="20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="postbtn" onClick={handleSubmit}>
            Gönər
          </button>
        </form>{" "}
      </div>
      <h5 className="testss">Bənzər bloqlar</h5>
      <div className="container similarrrr latest_blog">
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

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default BlogDetails;
