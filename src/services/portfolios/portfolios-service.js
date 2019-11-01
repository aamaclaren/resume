import PortfoliosApi from './portfolios-api';
import Portfolio from './portfolio-model';

export default class PortfolioService{

    static async GetPortfoliosByUser(user){
        let portfolioData = await PortfoliosApi.GetPortfoliosByUserDoc(user.getDoc());
        return portfolioData.map((portfolioItem) => {
            return new Portfolio(portfolioItem);
        }); 
    };
}