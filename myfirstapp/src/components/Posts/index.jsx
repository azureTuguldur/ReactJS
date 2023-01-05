import "./Posts.css";

const Post = [
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
  },
];
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
      {Post.map((item) => (
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
