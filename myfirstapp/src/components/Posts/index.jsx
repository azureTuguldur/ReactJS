import "./Posts.css";
import post from "../PostItem";

const Postc = (props) => {
  return (
    <div className="Pp">
      <img src={props.img} alt="" />
      <h6>{props.time}</h6>
      <h4 href="#">{props.name}</h4>
      <p>{props.text}</p>
      <a href="#">{props.btn}</a>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="Postsect">
      {post.map((item) => (
        <Postc
          key={item.name}
          img={item.img}
          time={item.time}
          name={item.name}
          text={item.text}
          btn={item.btn}
        />
      ))}
    </div>
  );
};
export default Posts;
