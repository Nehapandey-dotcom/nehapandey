import { NavLink} from "react-router-dom";
function Aside(){
    {
    const list=document.getElementsByClassName("linkTag");
    for(let i=0;i<list.length;i++){
    
    list[i].addEventListener("click", func);
    function func(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    }}
}
    return(
        <>
        <div className="navbar">
            <ul className="navList">
                <li className="nav-item"><NavLink to='/' className="linkTag" ><i class="fi fi-rs-user"></i>About</NavLink></li>
                <li className="nav-item"><NavLink to='/Resume' className="linkTag"><i class="fi fi-rs-document"></i>Resume</NavLink></li>
                <li className="nav-item"><NavLink to='/Work' className="linkTag"><i class="fi fi-rs-briefcase"></i>Work</NavLink></li>
                <li className="nav-item"><NavLink to='/Contact' className="linkTag"><i class="fi fi-rs-address-book"></i>Contact</NavLink></li>
            </ul>
        </div><hr/></>
    )
}
export default Aside;