import { User } from "../../models/user";
import lb4Provider from 'react-admin-lb4';
import { Admin, Resource } from 'react-admin';
import CustomerList from './components/dashboard/CustomerList';
import CustomerOrders from './components/dashboard/CustomerOrders';
import Products from './components/dashboard/Products';


interface IDashboardProps {
    currentUser: User | undefined
}

function EmployeeDashboard(props: IDashboardProps) {

    return (

    <Admin dataProvider={lb4Provider('http//localhost:5000')}>
        <Resource name='Customers' list={CustomerList} />
        <Resource name='Orders' list={CustomerOrders} />
        <Resource name='Products' list={Products} />
    </Admin>
    );


}

export default EmployeeDashboard;