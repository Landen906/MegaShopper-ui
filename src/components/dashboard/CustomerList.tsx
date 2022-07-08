import React from 'react';
import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';
import User from '../../models/user';

const CustomerFilter = (props: any) => (<Filter {...props}>
    <SearchInput placeholder='Customer ID' source='customer_id'
    resettable alwaysOn />
</Filter>)

function CustomerList(props:User){
return( 
    
     <List {...props} filters={<CustomerFilter/>}>
        <Datagrid>
            <TextField source='customerId'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <TextField source='email'/>
            <TextField source='address'/>
            <TextField source='username'/>
        </Datagrid>
     </List>
    

  );

}

export default CustomerList;