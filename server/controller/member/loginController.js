import * as repository from "../../repository/member/loginRepository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function userLogin(req,res){

  const {id, pass} = req.body;  

  const result = await repository.userLogin(id);

  result.login_result = false;

  if(result.cnt === 1){
    //비밀번호 체크
      if(await bcrypt.compare(pass,result.pass)){
        result.login_result = true; // dpass 객체에 login_result라는 객체를 생성하고 true값을 넣음
        const token = jwt.sign({id:id},'7\zxS6B~60q3');
        result.token = token; // dpass 객체에 token넣음
      }
  }

  // 클라이언트 인증을 하는 방식
  // 쿠키,세션,토큰
  // 비밀번호가 있으면 
  // 받은 비밀번호와 암호화된 비밀번호와 비교
  // result에 login_result 라는 객체 추가하여 로그인상태 반영
  // jwt 토큰 생성
  // Json 객체에 인증에 필요한 정보들을 담은 후 비밀키로 서명한 토큰
  // 
  res.json(result);

}