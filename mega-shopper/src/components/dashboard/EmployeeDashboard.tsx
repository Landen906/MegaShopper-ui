import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import  User  from "../../models/user";

// interface IDashboardProps {
//     currentUser: User | undefined
// }

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'last_name', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email Address', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
 ];


function EmployeeDashboard() {

    const [users, setUsers] = useState([] as User[]);

    useEffect(() => {
        fetch('http://localhost:8080/bankingApp/registration')
            .then(resp => resp.json())
            .then(data => setUsers(data));

        return () => {
            console.log('The Dashboard component was unrendered!');
       
        }
    }, []);

    return (
        // !props.currentUser ? <Navigate to="/login"/> :
        <>
             <h1>Welcome, Valued Employee!</h1> 
            <Typography variant="subtitle1">MegaShopper Employee Dashboard</Typography>
            <div style={{height: 800, width: '100%'}}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
                  

            </>


            );
            
            
}

export default EmployeeDashboard;