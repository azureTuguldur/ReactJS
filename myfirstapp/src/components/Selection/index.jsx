import "./Selection.css";

const Tags = [
  { name: "All" },
  { name: "UI Design" },
  { name: "UX Design" },
  { name: "Product Design" },
  { name: "Articles" },
  { name: "Tutorials" },
  { name: "News" },
];
const Choice = (props) => {
  return <button href="#">{props.name}</button>;
};

const Selection = () => {
  return (
    <div className="Selection">
      {Tags.map((item) => (
        <Choice key={item.name} name={item.name} />
      ))}
    </div>
  );
};

export default Selection;
