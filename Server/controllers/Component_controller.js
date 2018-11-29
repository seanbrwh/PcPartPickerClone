module.exports = {
  get_comp_case: async (req,res) => {
    let db = req.app.get('db');
    let comp_case = await db.comp_case.all_comp_case();
    res.status(200).send(comp_case)
  }
}