import { Request, Response } from 'express';

class AssessmentController {
  async listAll(req: Request, res: Response) {
    res.send('todas as avaliações ...');
  }

  async publishNew(req: Request, res: Response) {
    res.send('Nova avaliação criada ...');
  }

  async changeAssessment(req: Request, res: Response) {
    res.send('Avaliação foi alterada ...');
  }

  async closeAssessment(req: Request, res: Response) {
    res.send('A Avaliação não aceita mais respostas ...');
  }

  async deleteAssessment(req: Request, res: Response) {
    res.send('A Avaliação foi deletada ...');
  }
}

export default new AssessmentController();
