import user from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novouser = await user.create(req.body);
      return res.status(201).json(novouser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || [
          'erro ao criar usuário',
        ],
      });
    }
  }

  async index(req, res) {
    try {
      const users = await user.findall({
        attributes: { exclude: ['password_hash'] },
      });
      return res.json(users);
    } catch (e) {
      return res.status(500).json({ error: 'erro interno do servidor' });
    }
  }

  async show(req, res) {
    try {
      const user = await user.findbypk(req.params.id, {
        attributes: { exclude: ['password_hash'] },
      });
      if (!user) {
        return res.status(404).json({ error: 'usuário não encontrado' });
      }
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: 'erro interno do servidor' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'id não enviado' });
      }

      const user = await user.findbypk(id);
      if (!user) {
        return res.status(404).json({ error: 'usuário não encontrado' });
      }

      const novosdados = await user.update(req.body);
      return res.json(novosdados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || [
          'erro ao atualizar usuário',
        ],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'id não enviado' });
      }

      const user = await user.findbypk(id);
      if (!user) {
        return res.status(404).json({ error: 'usuário não encontrado' });
      }

      await user.destroy();
      return res.status(204).send();
    } catch (e) {
      return res.status(500).json({ error: 'erro ao deletar usuário' });
    }
  }
}

export default new UserController();

/*
metodos utilizados pelos controllers (nao deve possur mais que isso)
- index -> lista todos os usuários -> get
- store/create -> cria um novo usuário -> post
- delete -> apaga um usuário -> delete 
- show -> mostra um usuário -> get 
- update -> atualiza um usuário -> patch ou put
*/
