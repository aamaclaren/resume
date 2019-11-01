//import * as firebase from 'firebase/app';
//import 'firebase/firestore';

export default class PortfoliosApi {

    static async GetPortfoliosByUserDoc(userDoc){
        return await userDoc.collection('portfolios')
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