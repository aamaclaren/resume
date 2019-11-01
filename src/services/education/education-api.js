//import * as firebase from 'firebase/app';
//import 'firebase/firestore';

export default class EducationApi {

    static async GetEducationByUserDoc(userDoc){
        return await userDoc.collection('education')
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