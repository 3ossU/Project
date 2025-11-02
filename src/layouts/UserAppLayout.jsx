import { Outlet } from "react-router-dom";
import NavBar from "../componants/navbar";

const UserAppLayout = () => {
    return ( 
        <>
        <NavBar/>
        <Outlet/>
        </>
     );
}
 
export default UserAppLayout;