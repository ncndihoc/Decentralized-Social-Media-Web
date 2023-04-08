import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
      let token = req.headers("Authorization");
      if (!token) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
      if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length);
      }
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.userData = verified;
      next();

  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};

