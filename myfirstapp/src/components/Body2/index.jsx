import "./Body2.css";

const Blogs = [
  {
    class: "h1",
    name: "BLOG DETAILS H1",
    text1:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
    text2:
      "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. ",
    text3:
      "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
  {
    class: "h2",
    name: "BLOG DETAILS H2",
    text1:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
    text2:
      "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. ",
    text3:
      "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
  {
    class: "h3",
    name: "BLOG DETAILS H3",
    text1:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
    text2:
      "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. ",
    text3:
      "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
];

const Blogpost = (props) => {
  return (
    <div className="Bodyblog">
      <h1 className={props.className}>{props.name}</h1>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
    </div>
  );
};

const Body2 = () => {
  return (
    <div className="Body2">
      <img src="/img/postimg.png" alt="" />
      {Blogs.map((items) => (
        <Blogpost
          name={items.name}
          text1={items.text1}
          text2={items.text2}
          text3={items.text3}
          className={items.class}
        />
      ))}
    </div>
  );
};
export default Body2;
