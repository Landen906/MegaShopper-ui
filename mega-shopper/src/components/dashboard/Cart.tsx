import { Navigate } from 'react-router-dom';
import { User } from '../../models/user';

import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const ItemFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Search items...' source='title' resettable alwaysOn>
        </SearchInput>
    </Filter>   
);  // would it make sense to use the item title? 


// TO-DO: add functions pulling from the api
function Cart(props: Array<any>) {
    props.map(item => {
        return (
            <li className='collection-item avatar' key={item.id}>
                
            </li>
        )
    });
}

export default Cart;