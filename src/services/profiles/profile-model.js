export default class Profile {

    constructor(profile){
        this.name = profile.data.name;
        this.education = profile.data.education;
        this.experience = profile.data.experience;
        this.skill_ids = profile.data.skill_ids;
        this.portfolio_ids = profile.data.portfolio_ids;

        const _docRef = profile.docRef;
        this.getDoc = () => _docRef;
    }

    async update(){

    }
}

