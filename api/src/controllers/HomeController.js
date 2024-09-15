import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Antunes',
      email: 'fdsf@fsdfsd.com',
      idade: '20',
      peso: '43',
      altura: '2.4',
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
