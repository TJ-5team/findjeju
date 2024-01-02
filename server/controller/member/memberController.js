import * as repository from "../../repository/member/memberRepository.js";
import nodemailer from 'nodemailer';


const  mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "qmfntmchl123@gmail.com",
        pass: "rifi hbok fbnp urtj"
    }
})

export async function mailCheck(req, res){
    const {eid, domain} = req.body;
    const id = eid + "@" + domain;
    const result = await repository.mailCheck(id);

    const mailOptions = {
        from : "nodetest789@gmail.com",
        to: id,
        subject: '[오늘의집] 인증코드안내',
        text: `인증코드를 확인해주세요.
        ${number}`
    }
    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return;
        } else {
            console.log('Email Sent : ', info);
        }
        })
    res.json({result});
}


export async function getMember(req, res) {

    const rows = await repository.getMember()

    res.json(rows);

}




