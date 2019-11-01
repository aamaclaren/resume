import EducationApi from './education-api';
import Education from './education-model';

export default class EducationService{

    static async GetEducationByUser(user){
        let educationData = await EducationApi.GetEducationByUserDoc(user.getDoc());
        return educationData.map((educationItem) => {
            return new Education(educationItem);
        }); 
    };
}