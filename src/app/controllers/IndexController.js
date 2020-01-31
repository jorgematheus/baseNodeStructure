class IndexController {

 // lista todos os registros
  async index(req, res) {
    return res.json({ message: 'Hello World!' });
  }
  // lista apenas um regisro
  async show(req, res) {
    
  }
  // cadastra um regristo
  async store(req, res) {
    
  }  

  // atualiza um registro
  async update(req, res) {
    
  }

  // remove um registro
  async delete(req, res) {
    
  }

}

export default new IndexController();
