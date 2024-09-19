import aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoaluno = await aluno.create({
      nome: 'luiz',
      sobrenome: 'antunes',
      email: 'fdsf@fsdfsd.com',
      idade: '20',
      peso: '43',
      altura: '2.4',
    });

    res.json(novoaluno);
  }
}

export default new HomeController();
