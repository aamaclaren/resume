export default class Education {

    constructor(education){
        this.institution = education.data.institution;
        this.degrees = education.data.degrees;
        this.minors = education.data.minors;

        const _docRef = education.docRef;
        this.getDoc = () => _docRef;
    }

    async update(){

    }
}

