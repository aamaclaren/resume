import SkillsApi from './skills-api';
import Skill from './skill-model';

export default class SkillServive{

    static async GetSkillsByUser(user){
        let skillData = await SkillsApi.GetSkillsByUserDoc(user.getDoc());
        return skillData.map((skillItem) => {
            return new Skill(skillItem);
        }); 
    };
}