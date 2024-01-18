import * as repository from "../repository/reviewRepository.js";

export async function insertReview(req, res){
  const {contentid, contenttypeid, reply, replyImage, id} = req.body;
  const result = await repository.insertReview({contentid, contenttypeid, reply, replyImage, id});
  res.json(result);
}

export async function getReview(req, res){
  const {contentid, contenttypeid} = req.params;
  const result = await repository.getReview({contentid, contenttypeid});
  res.json(result);
}

export async function removeReview(req, res){
  const {rid} = req.params;
  const result = await repository.removeReview({rid});
  res.json(result);
}

export async function userReview(req,res){

  const mid = req.params.mid;

  const result = await repository.userReview(mid);
  res.json(result);

}

