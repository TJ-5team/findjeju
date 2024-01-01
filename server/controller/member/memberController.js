import * as repository from "../../repository/member/memberRepository.js";


export async function getMember(req, res) {

    const rows = await repository.getMember()

    res.json(rows);

}




