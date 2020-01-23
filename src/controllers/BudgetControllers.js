import Budget from '../models/Budget';
import Axios from 'axios'

class BudgetController {

  async store(req, res) {

    const response = await Axios.get('https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=becace530d64fb335c9363a87af60fa9a6528524');
      const Won = await response.data.data.map(({org_name, status, value}) => {
        Budget.create({
          org_name,
          status,
          value,
        });
    });
    return res.json(Won)
  } 
}

export default new BudgetController();
