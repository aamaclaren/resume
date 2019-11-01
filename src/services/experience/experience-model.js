export default class Experience {

    constructor(experience){
        this.start_date = experience.data.start_date;
        this.end_date = experience.data.end_date;
        this.title = experience.data.title;
        this.accomplishments = experience.data.accomplishments;

        const _docRef = experience.docRef;
        this.getDoc = () => _docRef;
    }

    async update(){

    }
}

