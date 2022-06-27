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
            <TextField source='id'/>
            <TextField source='first_name'/>
            <TextField source='last_name'/>
            <TextField source='email'/>
            {/* <TextField source='address'/>
            <TextField source='orders'/> */}
        </Datagrid>
     </List>
    

  );

}

export default CustomerList;