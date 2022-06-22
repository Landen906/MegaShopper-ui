
import { Navigate } from "react-router-dom";
import { User } from "../../models/user";

interface IDashboardProps {
    currentUser: User | undefined
}

function UserDashboard() {


    return (
            !props.currentUser ? <Navigate to="/login"/> :
            <>
                <h1>Welcome, {props.currentUser.firstName}!</h1>
           </>
        <div>
            {/* !props.currentUser ? <Navigate to="/login"/> :
                <h1>Welcome, {props.currentUser.firstName}!</h1> */}
        </div>
    )


}
export default UserDashboard;

// TODO: - add Route path in App.tsx [under ""function App()""]
/*    return (
        <Routes>
        <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/>
        </Routes>
      );
       */

// TODO: - add add props Navigated to dashboard in Login.tsx [above: <h4>Log into Mega-Shopper!</4>]
/*      return (
            props.currentUser ? <Navigate to="/dashboard"/> :
       */