export default class Skill {

    constructor(skill){
        this.category_id = skill.data.category_id;
        this.name = skill.data.name;
        this.skill_level = skill.data.skill_level;

        const _docRef = skill.docRef;
        this.getDoc = () => _docRef;
    }

    async update(){

    }
}

