//import * as firebase from 'firebase/app';
//import 'firebase/firestore';

export default class ProfilesApi {

    static async GetProfilesByUserDoc(userDoc){
        return await userDoc.collection('profiles')
            .get()
            .then((querySnapshot) => {
                return querySnapshot.docs.map((queryItem) => {
                    return {
                        docRef: queryItem.ref,
                        data: queryItem.data()
                    };
                })
            })
    }
}