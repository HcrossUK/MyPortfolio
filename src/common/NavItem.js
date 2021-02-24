import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <div id={props.item} className="NavItem">
      <Link className = '.NavItem-text'
        to={props.tolink}
        onClick={()=>{props.handleNavItemOnClick(props.item)}}>{props.item}</Link>
    </div>
  );
}
export default NavItem;