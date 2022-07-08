export class Employee {
    employeeId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;


    constructor(id: string, fn: string, ln: string, em: string, ad: string, un: string, pw: string) {
        this.employeeId = id;
        this.firstName = fn;
        this.lastName = ln;
        this.email = em;
        this.password = pw;
    }

}

export default Employee;