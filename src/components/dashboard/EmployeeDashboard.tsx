import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { ItemType } from "../../models/item";
import  User  from "../../models/user";

const columns: GridColDef[] = [
    { field: 'customerId', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email Address', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
 ];


function EmployeeDashboard() {

    const [users, setUsers] = useState([] as User[]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [img, setImg] = useState<string>('');
    const [error, setError] = useState<string>('')
    const {addItem, user, products, deleteItem} = useContext(GlobalContext);

    useEffect(() => {
        fetch('http://megashopperapi-env-1.eba-xhhmp83v.us-east-2.elasticbeanstalk.com/MegaShopper/auth')
            .then(resp => resp.json())
            .then(data => setUsers(data));

        return () => {
            console.log('The Dashboard component was unrendered!');
       
        }
    }, []);

    const submitItem = () => {
            if (!title || !description || !price || !category) {
              return setError("Fields cannot be blank")
            }
        // Fetching when my if condition is true
            fetch("http://megashopperapi-env-1.eba-xhhmp83v.us-east-2.elasticbeanstalk.com/MegaShopper/items", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                category: category
              }),
            })
              .then(res => { res.json() })
              .then(item => { 
                addItem(item)
                setTitle('')
                setDescription('')
                setPrice('')
                setCategory('')
                setImg('')
              }).catch(error => {
                setError("There was an error with the server!")
              })
          };

    return (
        <>
             <h1>Welcome, Valued Employee!</h1> 
            <Typography variant="subtitle1">MegaShopper Employee Dashboard</Typography>
            <div style={{height: 800, width: '100%'}}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <div>
                <h1>Add an Item</h1>
                <label>Title:</label>
                <input type="title"
                    value={title} 
                    onChange={(e: SyntheticEvent) => setTitle((e.target as HTMLInputElement).value)} 
                    placeholder='Title'/>
                    <br />
                <label>Description:</label>
                <input type="description"
                    value={description} 
                    onChange={(e: SyntheticEvent) => setDescription((e.target as HTMLInputElement).value)} 
                    placeholder='Description'/>
                    <br />
                    <label>Price:</label>
                <input type="price"
                    value={price} 
                    onChange={(e: SyntheticEvent) => setPrice((e.target as HTMLInputElement).value)} 
                    placeholder='Price'/>
                    <br />
                    <label>Category:</label>
                <input type="category"
                    value={category} 
                    onChange={(e: SyntheticEvent) => setCategory((e.target as HTMLInputElement).value)} 
                    placeholder='Category'/>
                    <br />
                    <label>Image:</label>
                <input type="img"
                    value={img} 
                    onChange={(e: SyntheticEvent) => setImg((e.target as HTMLInputElement).value)} 
                    placeholder='Image'/>
                    <br />
                    <button onClick={submitItem}>Submit</button>
            </div>
            {error}
            <hr />
            <div>
                {products.map(({id, title, desc, price, categoryId}: ItemType) =>
                    <div>
                        <h3>Title:{title}</h3>
                        <span>Price: ${price}</span>
                        <br />
                        <span>CategoryId:{categoryId}</span>
                        <br />
                        <button onClick={() => deleteItem(id)}>delete</button>
                        <hr />
                    </div>
                )}
            </div>
            </>
            );
            
            
}

export default EmployeeDashboard;