// import React from 'react';
// import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

// const CustomerFilter = (props) => (<Filter {...props}>
//     <SearchInput placeholder='Customer ID' source='customer_id'
//     resettable alwaysOn />
// </Filter>)

function CustomerList(){
return( <div>
    
     {/* <List {...props} filters={CustomerFilter}>
        <Datagrid>
            <TextField source='customer_id'/>
            <TextField source='first_name'/>
            <TextField source='last_name'/>
            <TextField source='email'/>
            <TextField source='address'/>
            <TextField source='orders'/>
        </Datagrid>

     </List> */}
    
</div>
  );

}

export default CustomerList;