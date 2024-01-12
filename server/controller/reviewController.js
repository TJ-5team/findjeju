import * as repository from "../repository/reviewRepository.js";

export async function insertReview(req, res){
  const {contentid, contenttypeid, reply, id} = req.body;
  const result = await repository.reviewInsert({contentid, contenttypeid, reply, id});
  res.json(result);
}

export async function getReview(req, res){
  const {contentid, contenttypeid} = req.params;
  const result = await repository.getReview({contentid, contenttypeid});
  res.json(result);
}