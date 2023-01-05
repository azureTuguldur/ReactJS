import "./Herotext.css";

const HeroBtns = [
  { name: "TWITTER", icon: "/img/twitter.png", ungu: "twitter linkbtn" },
  { name: "LINKEDIN", icon: "/img/linked_in.png", ungu: "linkedin linkbtn" },
  { name: "MEDIUM", icon: "/img/medium.png", ungu: "medium linkbtn" },
];

const Herobtn = (props) => {
  return (
    <button className={props.className}>
      <img src={props.icon} alt="" />
      {props.name}
    </button>
  );
};

const Herotext = () => {
  return (
    <div className="Heromain">
      <h1 className="Heroh1">Blog Posts</h1>
      <h2 className="Heroh2">I think so, this is it.</h2>
      <p className="Herotext">
        Design begins after I begin to think about how to present an experience
        most successfully, whether a button I put in can solve a promlem. The
        only point in design is not ui design, if the user does not have a good
        experience at the end of the product, the design will be considered
        unsuccesful in my opinion.
      </p>
      <div className="btns">
        {HeroBtns.map((item) => (
          <Herobtn
            key={item.name}
            icon={item.icon}
            name={item.name}
            className={item.ungu}
          />
        ))}
      </div>
    </div>
  );
};

export default Herotext;
