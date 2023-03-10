import { useState } from "react";
import "./Selection.css";

const tags = [
  { name: "All", category: "All" },
  { name: "UI Design", category: "UI" },
  { name: "UX Design", category: "UX" },
  { name: "Product Design", category: "PD" },
  { name: "Articles", category: "ATC" },
  { name: "Tutorials", category: "TTL" },
  { name: "News", category: "NWS" },
];
const postitems = [
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
    category: "UI",
  },
  {
    name: "This way is wrong about UX Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
    category: "UX",
  },
  {
    name: "This way is wrong about Product Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
    category: "PD",
  },
  {
    name: "This way is wrong about UX Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
    category: "UX",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
    category: "UI",
  },
  {
    name: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    btn: "READ MORE",
    time: "NOV 23 2020",
    img: "/img/postimg.png",
    category: "UI",
  },
];
const Selection = () => {
  const [posts, setPosts] = useState(postitems);
  const handleChange = (category) => {
    console.log("cat", category);
    const filtered = postitems.filter((item) => item.category === category);
    console.log("FIL", filtered);
    setPosts(filtered);
  };
  const Choice = (props) => {
    return <button href="#">{props.name}</button>;
  };
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

  return (
    <div className="Second">
      <div className="Selection">
        {tags.map((item) => (
          <Choice
            key={item.name}
            name={item.name}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className="Postsect">
        {posts.map((item) => (
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
    </div>
  );
};

export default Selection;
