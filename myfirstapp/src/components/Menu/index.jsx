import "./Menu.css"

const MenuItems = [
    {name:"PORTFOLIO"},
    {name:"BLOG"},
    {name:"CV"},
    {name:"STORE"},
    {name:"FREELANCE"},
    {name:"ABOUT ME"},
    {name:"CONTACT"}
]
const MenuShow = (props) => {
    return <a href="#">{props.name}</a>
}

const Menu = ()=>{
    return (
        <div className="Menu">
            {MenuItems.map((item)=>(
            <MenuShow key={item.name} name={item.name}/>
            ))}
        </div>
    )
}

export default Menu;