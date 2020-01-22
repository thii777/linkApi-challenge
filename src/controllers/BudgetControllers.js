import Budget from '../models/Budget';

class BudgetController {
  async store(req, res) {
    const { product, price, status } = req.body;

    const budget = await Budget.create({
      product,
      price,
      status,
    });
    return res.json(budget);
  }
}

export default new BudgetController();
