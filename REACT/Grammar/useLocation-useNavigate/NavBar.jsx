import { useNavigate, useLocation } from "react-router-dom";

/*
	location: {				
						  "pathname": "/profile",
						  "search": "",
						  "hash": "",
						  "state": null,
						  "key": "default"
					  }
*/

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathNameMatch = (route) => {
    console.log(route === location.pathname);
    return route === location.pathname ? true : false;
  };

  return (
    <div style={{ position: "absolute", bottom: 0 }}>
      <div>
        <button
          onClick={() => navigate("/")}
          style={
            pathNameMatch("/")
              ? { background: "lightblue" }
              : { background: "red" }
          }
        >
          Exlore
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/offers")}
          style={
            pathNameMatch("/offers")
              ? { background: "lightblue" }
              : { background: "red" }
          }
        >
          Offers
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/profile")}
          style={
            pathNameMatch("/profile")
              ? { background: "lightblue" }
              : { background: "red" }
          }
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default Navbar;

// const pathMatchRoute = (route) => {
//     if (route === location.pathname) {
//       return true;
//     }
//   };

// <footer className="navbar">
// <nav className="navbarNav">
//   <ul className="navbarListItems">
//     <li className="navbarListItem" onClick={() => navigate("/")}>
//       <ExploreIcon
//         fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
//         width="36px"
//         height="36px"
//       />
//       <p
//         className={
//           pathMatchRoute("/")
//             ? "navbarListItemNameActive"
//             : "navbarListItemName"
//         }
//       >
//         Explore
//       </p>
//     </li>
//     <li className="navbarListItem" onClick={() => navigate("/offers")}>
//       <OfferIcon
//         fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
//         width="36px"
//         height="36px"
//       />
//       <p
//         className={
//           pathMatchRoute("/offer")
//             ? "navbarListItemNameActive"
//             : "navbarListItemName"
//         }
//       >
//         Offers
//       </p>
//     </li>
//     <li className="navbarListItem" onClick={() => navigate("/profile")}>
//       <PersonOutlineIcon
//         fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
//         width="36px"
//         height="36px"
//       />
//       <p
//         className={
//           pathMatchRoute("/profile")
//             ? "navbarListItemNameActive"
//             : "navbarListItemName"
//         }
//       >
//         Profile
//       </p>
//     </li>
//   </ul>
// </nav>
// </footer>
