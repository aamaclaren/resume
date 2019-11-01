//import * as firebase from 'firebase/app';
//import 'firebase/firestore';

export default class SkillsApi {

    static async GetSkillsByUserDoc(userDoc){
        return await userDoc.collection('skills')
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