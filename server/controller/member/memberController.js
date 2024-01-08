import * as repository from "../../repository/member/memberRepository.js";
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "qmfntmchl123@gmail.com",
        pass: "rifi hbok fbnp urtj"
    }
})

export async function mailCheck(req, res) {
    const { email, echeck } = req.body;
    const id = email + "@" + echeck;
    console.log(req.body);
    const result = await repository.mailCheck(id);
    // const number = Math.floor(Math.random() * 1E9);
    const number = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const mailOptions = {
        from: "qmfntmchl123@gmail.com",
        to: id,
        subject: '[제주구석구석] 인증코드안내',
        text: `인증코드를 확인해주세요. ${number}`
    }
    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return;
        } else {
            console.log('Email Sent : ', info);
        }
    })
    res.json({ result, number });
}


export async function getMember(req, res) {

    const rows = await repository.getMember()

    res.json(rows);

}

export async function signUp(req,res){

    const {name,id,pass,nickname,phone1,phone2,phone3,postal,addr,address,image,email,checked} = req.body

    const phone = phone1 + phone2 + phone3;
    const totalAddr = `(${postal})${addr}${address}`;
    const hpass = bcrypt.hashSync(pass, 10);

    const result = await repository.signUp({name,id,hpass,nickname,email,phone,totalAddr,image,checked});

    res.json(result);

};




