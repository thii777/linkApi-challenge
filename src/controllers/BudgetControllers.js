import Budget from '../models/Budget';
import pipedrive from '../services/drive-api'

class BudgetController {

  async store(req, res) {
    const response = await pipedrive.get();
      const Won = await response.data.data.map(({org_name, status, value}) => {
        Budget.create({
          org_name,
          status,
          value,
        });
    });
    return res.json(Won)
  }

  async index(req, res) {
    const { id } = req.params;

    const budgetClosed = await Budget.find({id})

    return res.json(budgetClosed)
  }
}

export default new BudgetController();
