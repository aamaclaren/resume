import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class UsersApi {

    static async GetUserByEmail(email){
        return await firebase.firestore()
            .collection('users')
            .where("email", "==", email)
            .get()
            .then((querySnapshot) => {
                return {
                    docRef: querySnapshot.docs[0].ref,
                    data: querySnapshot.docs[0].data()
                };
            });
    }
}
