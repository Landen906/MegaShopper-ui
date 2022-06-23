import React from 'react';
import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const OrderFilter = (props: any) => (<Filter {...props}>
    <SearchInput placeholder='Customer ID' source='customer_id'
    resettable alwaysOn />
</Filter>)

function CustomerOrders(props: any){
return(
     <List {...props} filters={OrderFilter}>
        <Datagrid>
            <TextField source='customer_id'/>
            <TextField source='first_name'/>
            <TextField source='last_name'/>
            <TextField source='email'/>
            <TextField source='orders'/>
        </Datagrid>

     </List>
    
  );

}

export default CustomerOrders;