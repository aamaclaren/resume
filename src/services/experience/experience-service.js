import ExperienceApi from './experience-api';
import Experience from './experience-model';

export default class ExperienceService{

    static async GetExperienceByUser(user){
        let experienceData = await ExperienceApi.GetExperienceByUserDoc(user.getDoc());
        return experienceData.map((experienceItem) => {
            return new Experience(experienceItem);
        }); 
    };
}