//import * as firebase from 'firebase/app';
//import 'firebase/firestore';

export default class ExperienceApi {

    static async GetExperienceByUserDoc(userDoc){
        return await userDoc.collection('experience')
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