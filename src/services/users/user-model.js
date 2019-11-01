export default class User {

    constructor(user){
        this.email = user.data.email;
        this.first_name = user.data.first_name;
        this.last_name = user.data.last_name;
        this.mobile = user.data.mobile;

        const _docRef = user.docRef;
        this.getDoc = () => _docRef;
    }

    async update(){

    }
}

