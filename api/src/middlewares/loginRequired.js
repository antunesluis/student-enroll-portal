import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: 'Token não fornecido',
    });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({
      error: 'Erro no token',
    });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      error: 'Token mal formatado',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = decoded;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        error: 'Usuário inválido',
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        error: 'Token expirado',
      });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        error: 'Token inválido',
      });
    }
    console.error('Erro na verificação do token:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
    });
  }
};
