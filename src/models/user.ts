export class User {
    customerId: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    username: string;


    constructor(id: string, fn: string, ln: string, em: string, ad: string, un: string) {
        this.customerId = id;
        this.firstName = fn;
        this.lastName = ln;
        this.email = em;
        this.address = ad;
        this.username = un;
    }

}

export default User;