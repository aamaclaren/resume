export default class Portfolio {

    constructor(portfolio){
        this.name = portfolio.data.name;
        this.url = portfolio.data.url;

        const _docRef = portfolio.docRef;
        this.getDoc = () => _docRef;
    }

    async update(){

    }
}

