import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import ImageUpload from '../../imageUpload/ImageUpload';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import { useGetMember } from '../../../hooks/useGetMember';
import Recaptcha from "react-google-recaptcha";

export default function Join() {

    const navigate = useNavigate();

    // 회원데이터
    // const [userData, setUserData] = useState([]);
    // input 각폼요소
    const [form, setForm] = useState({ name: '', id: '', pass: '', passcheck: '', nickname: '', email: '', echeck: '', eSelf: '', confirm: '', phone1: '', phone2: '', phone3: '', address: '' });
    // 이메일 토글
    const [emailToggle, setEmailToggle] = useState(false);
    // 확인버튼 클릭시 보낼 메일데이터
    const [email, setEmail] = useState({ email: '', echeck: '' });
    // 이미지경로
    const [image, setImage] = useState('');
    // 메일 타이머
    const [time, setTime] = useState(180);
    // 메일 카운트다운시작
    const [isActive, setIsActive] = useState(false);
    // 메일 유효성검사
    const [number, setNumber] = useState(0);
    // 메일 체크여부 true면 메일 비활성화
    const [mailCheck, setMailCheck] = useState(false);
    // 주소 - 주소
    const [postal, setPostal] = useState(false);
    // 주소 - 상세주소 
    const [address, setAddress] = useState('');
    // 주소 - 우편번호
    const [zoneCode, setZoneCode] = useState('');
    // 이용약관 전체선택
    const [allCheck, setAllCheck] = useState(false);
    // 이용약관
    const [checked, setChecked] = useState({ terms1: false, terms2: false, terms3: false });
    // 유효성검사시 focus여부
    const [focus, setFocus] = useState({ name: '', id: '', pass: '', passcheck: '', nickname: '', email: '', echeck: '', eSelf: '', confirm: '', phone1: '' });
    // 유효성검사 내용
    const [validation, setValidation] = useState({ name: '필수 입력 항목입니다.', id: '필수 입력 항목입니다.', pass: '필수 입력 항목입니다.', passcheck: '필수 입력 항목입니다.', nickname: '필수 입력 항목입니다.', email: '이메일 형식에 맞지 않습니다.', echeck: '필수 입력 항목입니다.', eSelf: '필수 입력 항목입니다.', confirm: '', phone: '필수 입력 항목입니다.', terms1: '', terms2: '' });
    // 리캡쳐
    const [captcha, setCaptcha] = useState(null);

    // 정규식
    let pattern_num = /[0-9]/;	// 숫자 
    let pattern_eng = /[a-zA-Z]/;	// 문자 
    let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/
    // A-Z, a-z, 0-9 특수문자가 포함되어 있는지, 8자 이상
    // const pattern_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    /* 
        @을 기준으로 앞 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크
        @을 기준으로 뒷 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크
        @을 기준으로 뒷 구간에서 . 뒷 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크
    */
    const pattern_mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern_emoji = /[\uD800-\uDBFF][\uDC00-\uDFFF]/; // 이모지체크
    const pattern_phone = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

    // 정규식도 객체로 관리하여준다.
    // 

    // 유효성검사 focus이동
    const nameRef = useRef(null);
    const idRef = useRef(null);
    const passRef = useRef(null);
    const pcheckRef = useRef(null);
    const nickRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef1 = useRef(null);
    const phoneRef2 = useRef(null);
    const phoneRef3 = useRef(null);
    const teRef1 = useRef(null);
    const teRef2 = useRef(null);

    /*데이터 가져와서 회원비교*/
    const [userData] = useGetMember();

    /*서브밋함수 */
    const fnSubmit = (e) => {

        e.preventDefault();

        if (validation.name !== '사용 가능한 이름입니다.') {
            nameRef.current.focus();
            return false
        }

        if (validation.id !== '사용 가능한 아이디입니다.') {
            idRef.current.focus();
            return false
        }

        if (validation.pass !== '사용 가능한 비밀번호입니다.') {
            passRef.current.focus();
            return false
        }

        if (validation.passcheck !== '입력하신 비밀번호와 같습니다.') {
            pcheckRef.current.focus();
            return false
        }

        if (validation.nickname !== '사용 가능한 닉네임입니다.') {
            nickRef.current.focus();
            return false
        }

        if (validation.email !== '이메일 인증이 완료되었습니다.') {
            emailRef.current.focus();
            return false
        }

        if (validation.phone !== '사용 가능한 휴대폰번호입니다.') {
            phoneRef1.current.focus();
            return false
        }

        if (!checked.terms1) {
            setValidation((validation) => ({ ...validation, terms1: '필수 입력 사항입니다.' }))
            teRef1.current.focus();
            return false
        }
        if (!checked.terms2) {
            setValidation((validation) => ({ ...validation, terms2: '필수 입력 사항입니다.' }))
            teRef2.current.focus();
            return false
        }

        if (!captcha) {
            alert("로봇 체크해주세요.")
            return
        }

        const formData = new FormData(e.target);
        const formDataObject = {};

        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        formDataObject['addr'] = address;
        formDataObject['email'] = email.email + "@" + email.echeck
        formDataObject['checked'] = checked.terms3

        axios({

            method: 'post',
            url: 'http://192.168.50.31:8000/member/signup',
            data: formDataObject

        }).then((result) => {

            if (result.data === 'ok') {
                navigate("/");
                window.location.reload();
            }

        })

    };



    /*유효성검사 */
    const fnChange = (e) => {

        const { name, value } = e.target



        /* 이름 유효성 검사 */
        if (name === 'name' && value) {
            const search = userData.some((val) => val.name === value);
            if (pattern_spc.test(value) || pattern_emoji.test(value) || pattern_eng.test(value)) {
                alert("특수문자,이모티콘,영어는 입력 할 수 없습니다.")
                return false
            } else if (value.length <= 2) {
                setValidation((validation) => ({ ...validation, name: '최소 세글자 이상입니다.' }));
            } else if (search) {
                setValidation((validation) => ({ ...validation, name: '동일한 이름이 존재합니다.' }));
            } else if (value.length >= 6) {
                setValidation((validation) => ({ ...validation, name: '최대 다섯글자 입니다.' }));
                return false
            } else {
                setValidation((validation) => ({ ...validation, name: '사용 가능한 이름입니다.' }));
            }
        } else if (name === 'name' && !value) {
            setValidation((validation) => ({ ...validation, name: '필수 입력 항목입니다.' }));
        }
        /* 아이디 유효성 검사 */
        if (name === 'id' && value) {
            const search = userData.some((val) => val.id === value);
            if (pattern_kor.test(value) || pattern_spc.test(value) || pattern_emoji.test(value)) {
                alert("특수문자,이모티콘, 한글은 입력 할 수 없습니다.")
                return false
            } else if (value.length <= 4 || value.length >= 12) {
                setValidation((validation) => ({ ...validation, id: '최소 5자 이상, 최대 12글자 입니다.' }));
            } else if (search) {
                setValidation((validation) => ({ ...validation, id: '동일한 아이디가 존재합니다.' }));
            } else {
                setValidation((validation) => ({ ...validation, id: '사용 가능한 아이디입니다.' }));
            }
        } else if (name === 'id' && !value) {
            setValidation((validation) => ({ ...validation, id: '필수 입력 항목입니다.' }));
        }
        /* 패스워드 유효성 검사 */
        if (name === 'pass' && value) {
            if (!reg.test(value)) {
                setValidation((validation) => ({ ...validation, pass: '한글을 제외한 특수문자,문자,숫자를 포함하여 8자 이상 입력해주세요.' }));
            } else if (value.length >= 13) {
                setValidation((validation) => ({ ...validation, pass: '최대 12글자 입니다.' }));
            } else {
                setValidation((validation) => ({ ...validation, pass: '사용 가능한 비밀번호입니다.' }));
            }
            if (form.passcheck !== value) {
                setValidation((validation) => ({ ...validation, passcheck: '입력하신 비밀번호와 다릅니다.' }));
            } else if (form.passcheck === value) {
                setValidation((validation) => ({ ...validation, passcheck: '입력하신 비밀번호와 같습니다.' }));
            }
        } else if (name === 'pass' && !value) {

            setValidation((validation) => ({ ...validation, pass: '필수 입력 항목입니다.' }));

        }
        /* 패스워드 체크 유효성 검사 */
        if (name === 'passcheck' && value) {
            if (form.pass === value) {
                setValidation((validation) => ({ ...validation, passcheck: '입력하신 비밀번호와 같습니다.' }))
            } else {
                setValidation((validation) => ({ ...validation, passcheck: '입력하신 비밀번호와 다릅니다.' }))
            }
        } else if (name === 'passcheck' && !value) {

            setValidation((validation) => ({ ...validation, passcheck: '필수 입력 항목입니다.' }));

        }
        /* 닉네임 유효성 검사 */
        if (name === 'nickname' && value) {
            const search = userData.some((val) => val.nickname === value);
            if (pattern_spc.test(value) || pattern_emoji.test(value)) {
                alert("특수문자,이모티콘은 입력 할 수 없습니다.")
                return false
            }
            if (value.length <= 2) {
                setValidation((validation) => ({ ...validation, nickname: '최소 세글자 이상입니다.' }));
            } else if (search) {
                setValidation((validation) => ({ ...validation, nickname: '동일한 닉네임이 존재합니다.' }));
            } else if (value.length >= 8) {
                setValidation((validation) => ({ ...validation, nickname: '최대 8글자 입니다.' }));
                return false
            } else {
                setValidation((validation) => ({ ...validation, nickname: '사용 가능한 닉네임입니다.' }));
            }
        } else if (name === 'nickname' && !value) {
            setValidation((validation) => ({ ...validation, nickname: '필수 입력 항목입니다.' }));
        }
        /* 이메일 유효성 검사 */
        if (name === 'email' && value) {
            const emailCheck = form.email + '@' + form.echeck
            const emailSelfCheck = form.email + '@' + form.eSelf
            const search = userData.some((val) => val.email === emailCheck);
            const selfSearch = userData.some((val) => val.email === emailSelfCheck);
            if (search || selfSearch) {
                setValidation((validation) => ({ ...validation, email: '등록된 이메일입니다.' }));
            } else if (pattern_mail.test(emailCheck) || pattern_mail.test(emailSelfCheck)) {
                setValidation((validation) => ({ ...validation, email: '이메일을 인증해주세요.' }));

            } else {
                setValidation((validation) => ({ ...validation, email: '이메일 형식에 맞지 않습니다.' }));
            }

        } else if (name === 'email' && !value) {
            setValidation((validation) => ({ ...validation, email: '이메일 형식에 맞지 않습니다.' }));
        }
        if (name === 'echeck') {
            const emailCheck = form.email + '@' + form.echeck
            const emailSelfCheck = form.email + '@' + form.eSelf
            const search = userData.some((val) => val.email === emailCheck);
            const selfSearch = userData.some((val) => val.email === emailSelfCheck);
            if (search || selfSearch) {
                setValidation((validation) => ({ ...validation, email: '등록된 이메일입니다.' }));
            } else if (pattern_mail.test(emailCheck) || pattern_mail.test(emailSelfCheck)) {
                setValidation((validation) => ({ ...validation, email: '이메일을 인증해주세요.' }));
            } else {
                setValidation((validation) => ({ ...validation, email: '이메일 형식에 맞지 않습니다.' }));
            }

        } else if (name === 'email' && !value) {
            setValidation((validation) => ({ ...validation, email: '이메일 형식에 맞지 않습니다.' }));
        }
        if (name === 'confirm' && value) {
            if (!pattern_num.test(value)) {
                return false
            } else if (parseInt(value) !== number) {
                setValidation((validation) => ({ ...validation, confirm: '올바른 코드가 아닙니다.' }));
            } else if (parseInt(value) === number) {
                setValidation((validation) => ({ ...validation, confirm: '올바른 코드입니다.' }));
            } else if (time === 0) {
                setValidation((validation) => ({ ...validation, confirm: '인증코드가 만료되었습니다.' }));
            }

        }

        setForm({ ...form, [name]: value });

    }
    /*이용약관 전체선택*/
    const handleAllCheck = (e) => {
        const { checked } = e.target;

        setChecked((checks) => Object.keys(checks).reduce(
            (newCheck, checkKey) => ({
                ...newCheck,
                [checkKey]: checked,
            }),
            {}
        )
        );
        setAllCheck(checked);
    }

    /*이용약관토글체크 */
    const handleCheck = (e) => {

        const { name, checked } = e.target;

        setChecked((checks) => ({ ...checks, [name]: checked }));

        const allChecked = Object.values({ ...checked, [name]: checked }).every((value) => value === true);
        setAllCheck(allChecked);

    }

    /*포커스함수 */
    const handleFocus = (e) => {

        const { name, value } = e.target;

        if (value) {

            return false

        }

        setFocus((focus) => ({ ...focus, [name]: 'ok' }));

    }

    /*이메일 유효성검사 */
    useEffect(() => {

        if (!userData) {
            return
        }

        setEmailToggle(false);
        const emailCheck = form.email + '@' + form.echeck
        const emailSelfCheck = form.email + '@' + form.eSelf

        const search = userData.some((val) => val.email === emailCheck);
        const selfSearch = userData.some((val) => val.email === emailSelfCheck);
        if (search || selfSearch) {
            setValidation((validation) => ({ ...validation, email: '등록된 이메일입니다.' }));
        } else if (pattern_mail.test(emailCheck) || pattern_mail.test(emailSelfCheck)) {
            setValidation((validation) => ({ ...validation, email: '이메일을 인증해주세요.' }));
        } else {
            setValidation((validation) => ({ ...validation, email: '이메일 형식에 맞지 않습니다.' }));
        }


    }, [form.echeck, form.email, form.eSelf]);

    /*이메일 3분 setInterval */
    useEffect(() => {

        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(time => time - 1);
                if (time === 1) {
                    setIsActive(false)
                }
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    /*이메일 카운트다운 */
    const resetCountdown = () => {

        setTime(180);
        setIsActive(false);

    };

    /*이메일전송 */
    const handleMail = () => {

        setTime(180);

        axios.post("http://192.168.50.31:8000/member/email", { email: form.email, echeck: form.echeck })
            .then((result) => {

                setNumber(result.data.number);
                resetCountdown();
                setIsActive(true);

                // startCountdown();
            })

    }

    /*이메일확인버튼*/
    const handleMailCheck = (e) => {

        setEmail({ email: form.email, echeck: form.echeck })
        // 이메일안에 데이터 넣고 서브밋할 때 이 데이터 보내야함
        setMailCheck(true);

    }
    /*이메일인증*/
    useEffect(() => {

        if (mailCheck) {
            setValidation((validation) => ({ ...validation, email: '이메일 인증이 완료되었습니다.' }));
        }

    }, [mailCheck]) // 이메일인증 확인버튼

    /*다음주소 */
    const completeHandler = (data) => {

        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setAddress(fullAddress);
        setZoneCode(data.zonecode);

    }

    /*휴대폰 유효성검사 */
    useEffect(() => {
        if (!userData) {
            return
        }
        const phoneTotal = `${form.phone1}-${form.phone2}-${form.phone3}`;
        const phoneTot = `${form.phone1}${form.phone2}${form.phone3}`;
        const search = userData.some((val) => val.phone === phoneTot);
        console.log(search);
        if (!pattern_phone.test(phoneTotal)) {
            setValidation((validation) => ({ ...validation, phone: '번호 형식에 맞지 않습니다.' }));
        } else if (search) {
            setValidation((validation) => ({ ...validation, phone: '이미 사용 중인 번호입니다.' }));
        } else if (pattern_phone.test(phoneTotal)) {
            setValidation((validation) => ({ ...validation, phone: '사용 가능한 휴대폰번호입니다.' }));
        }


    }, [form.phone1, form.phone2, form.phone3])

    /*파일업로드 */
    const getImage = (e, d) => {
        setImage(e);
    }

    /* function fnName() {

        if (focus.name === '' || form.name) {
            if () {

            } else {

            }
        } else {
            return <span className={styles.check}>{validation.name}</span>
        }

    } */

    return (
        <>
            <div className={`${styles.wrap} inner`}>
                <div className={styles.joinBox}>
                    <h2 className={styles.title}>회원가입</h2>
                    <form className={styles.joinForm} onSubmit={fnSubmit}>
                        <ul className={styles.joinList}>
                            <li className={styles.joinLi}>
                                <label id="name">* 이름</label>
                                <input type="text" name="name" id="name" value={form.name} onChange={fnChange} placeholder='이름' onFocus={handleFocus} ref={nameRef} />
                                {focus.name === '' || form.name
                                    ? validation.name === '최소 세글자 이상입니다.' || validation.name === '최대 다섯글자 입니다.' || validation.name === '동일한 이름이 존재합니다.'
                                        ? <span className={styles.check}>{validation.name}</span>
                                        : validation.name === '필수 입력 항목입니다.' ? null : <span className={styles.success}>{validation.name}</span>
                                    : <span className={styles.check}>{validation.name}</span>}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="id">* 아이디</label>
                                <input type="text" name="id" id="id" value={form.id} onChange={fnChange} placeholder='아이디' onFocus={handleFocus} ref={idRef} />
                                {focus.id === '' || form.id
                                    ? validation.id === '최소 5자 이상, 최대 12글자 입니다.' || validation.id === '동일한 아이디가 존재합니다.'
                                        ? <span className={styles.check}>{validation.id}</span>
                                        : validation.id === '필수 입력 항목입니다.' ? null : <span className={styles.success}>{validation.id}</span>
                                    : <span className={styles.check}>{validation.id}</span>}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="pass">* 비밀번호</label>
                                <input type="password" name="pass" id="pass" value={form.pass} onChange={fnChange} placeholder='비밀번호' onFocus={handleFocus} ref={passRef} />
                                {focus.pass === '' || form.pass
                                    ? validation.pass === '한글을 제외한 특수문자,문자,숫자를 포함하여 8자 이상 입력해주세요.'
                                        ? <span className={styles.check}>{validation.pass}</span>
                                        : validation.pass === '필수 입력 항목입니다.' ? null : <span className={styles.success}>{validation.pass}</span>
                                    : <span className={styles.check}>{validation.pass}</span>}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="passcheck">* 비밀번호 체크</label>
                                <input type="password" name="passcheck" id="passcheck" value={form.passcheck} onChange={fnChange} placeholder='비밀번호 확인' onFocus={handleFocus} ref={pcheckRef} />
                                {focus.passcheck === '' || form.passcheck
                                    ? validation.passcheck === '입력하신 비밀번호와 다릅니다.'
                                        ? <span className={styles.check}>{validation.passcheck}</span>
                                        : validation.passcheck === '필수 입력 항목입니다.' ? null : <span className={styles.success}>{validation.passcheck}</span>
                                    : <span className={styles.check}>{validation.passcheck}</span>
                                }
                            </li>
                            <li className={styles.joinLi}>
                                <label id="nickname">* 닉네임</label>
                                <input type="text" name="nickname" id="nickname" value={form.nickname} onChange={fnChange} placeholder='닉네임' onFocus={handleFocus} ref={nickRef} />
                                {focus.nickname === '' || form.nickname
                                    ? validation.nickname === '최소 세글자 이상입니다.' || validation.nickname === '최대 8글자 입니다.' || validation.nickname === '동일한 닉네임이 존재합니다.'
                                        ? <span className={styles.check}>{validation.nickname}</span>
                                        : validation.nickname === '필수 입력 항목입니다.' ? null : <span className={styles.success}>{validation.nickname}</span>
                                    : <span className={styles.check}>{validation.nickname}</span>
                                }
                            </li>
                            <li className={styles.joinLi}>
                                <label id="email">* 이메일</label>
                                <div className={styles.emailWrap}>
                                    <input type="text" name="email" id="email" className={styles.emailInput} value={form.email} onChange={fnChange} placeholder='이메일' onFocus={handleFocus} disabled={mailCheck} ref={emailRef} />
                                    <span>@</span>
                                    {form.echeck === 'manual'
                                        ?
                                        <div>
                                            <input type='text' name='eSelf' value={form.eSelf} onChange={fnChange} onFocus={handleFocus} />
                                            <span className={styles.emailClose} onClick={() => {
                                                setForm((form) => ({ ...form, email: '', echeck: '', eSelf: '' }));
                                            }}>x</span>
                                        </div>
                                        :
                                        <select name="echeck" id="echeck" value={form.echeck}  // select의 value를 state와 연동
                                            onChange={fnChange} onFocus={handleFocus} disabled={mailCheck}>
                                            <option value="" disabled>선택해주세요.</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="hanmail.net">hanmail.com</option>
                                            <option value="daum.net">daum.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="nate.com">nate.com</option>
                                            <option value="hotmail.com">hotmail.com</option>
                                            <option value="outlook.com">outlook.com</option>
                                            <option value="icloud.com">icloud.com</option>
                                            <option value="manual">직접입력</option>
                                        </select>}
                                </div>
                                {(focus.email === 'ok' || focus.echeck === 'manual') && form.email || form.echeck
                                    ? validation.email === '등록된 이메일입니다.' || validation.email === '이메일 형식에 맞지 않습니다.'
                                        ? <span className={styles.check}>{validation.email}</span>
                                        : validation.email === '이메일을 인증해주세요.' ? <span className={styles.check}>{validation.email}</span> : <span className={styles.success}>{validation.email}</span>
                                    : null
                                }
                                <button type='button' className={styles.emailBtn} disabled={(validation.email === '이메일 형식에 맞지 않습니다.' || validation.email === '등록된 이메일입니다.') || emailToggle === true} onClick={() => {
                                    setEmailToggle(!emailToggle);
                                    handleMail();
                                }}>
                                    이메일 인증하기
                                </button>
                                {emailToggle && !mailCheck ?
                                    <div className={styles.emailCodeBox}>
                                        <div className={styles.countDown}>{Math.floor(time / 60)}:{time % 60 > 9 ? time % 60 : "0" + time % 60}</div>
                                        <p className={styles.desCode}>이메일로 전송된 인증코드를 입력해주세요.</p>
                                        <div>
                                            <input type="text" name='confirm' id="confirm" value={form.confirm} maxLength={6} placeholder='인증코드 6자리 입력' onChange={fnChange} onFocus={handleFocus} />
                                            <button type="button" onClick={handleMailCheck} disabled={time === 0 || parseInt(form.confirm) !== number || mailCheck === true}>확인</button>
                                        </div>
                                        {validation.confirm === '올바른 코드가 아닙니다.' ? <span className={styles.check}>{validation.confirm}</span> : null}
                                        <p>이메일을 받지 못하셨나요? <span onClick={handleMail}>이메일 재전송하기</span></p>
                                    </div> : null}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="phone">* 핸드폰번호</label>
                                <div className={styles.phoneWrap}>
                                    <input type="text" name="phone1" id="phone" value={form.phone1} onChange={fnChange} placeholder='010' onFocus={handleFocus} maxLength={3} ref={phoneRef1} />
                                    <span>-</span>
                                    <input type="text" name="phone2" id="phone" value={form.phone2} onChange={fnChange} placeholder='1234' maxLength={4} ref={phoneRef2} />
                                    <span>-</span>
                                    <input type="text" name="phone3" id="phone" value={form.phone3} onChange={fnChange} placeholder='5678' maxLength={4} ref={phoneRef3} />
                                </div>
                                {form.phone1 || focus.phone1 === 'ok' ? validation.phone === '번호 형식에 맞지 않습니다.' || validation.phone === '이미 사용 중인 번호입니다.' || validation.phone === '필수 입력 항목입니다.' ? <span className={styles.check}> {validation.phone}</span> : <span className={styles.success}> {validation.phone}</span> : null}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="postal">* 우편번호</label>
                                <div className={styles.postalWrap}>
                                    <input type="text" name="postal" id="postal" value={zoneCode} onChange={fnChange} placeholder='우편번호 입력' />
                                    <button type="button" className={styles.postalBtn} onClick={() => {

                                        setPostal((postal) => !postal);

                                    }}>{postal ? 'X' : '우편번호 검색'}</button>
                                </div>
                                {postal ? <DaumPostcode onComplete={completeHandler} /> : null}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="address">* 주소</label>
                                <div className={styles.addressWrap}>
                                    <input type="text" name="addr" id="addr" value={address} onChange={fnChange} />
                                    <input type="text" name="address" id="address" value={form.address} onChange={fnChange} placeholder='상세주소입력' />
                                </div>
                            </li>
                            <li className={styles.joinLi}>
                                <label id="image">* 사진 업로드</label>
                                <input type="hidden" name="image" placeholder="image" value={image} />
                                <ImageUpload getImage={getImage} />
                            </li>
                            <li className={styles.joinLi}>
                                <label id="terms">* 약관동의</label>
                                <div className={styles.terms}>
                                    <p><input type="checkbox" name="termsAll" checked={checked.termsAll} onChange={handleAllCheck} onFocus={handleFocus} /><span>전체선택</span></p>
                                    <p><input type="checkbox" name="terms1" checked={checked.terms1} onChange={handleCheck} onFocus={handleFocus} ref={teRef1} /><span>개인정보 수집이용 동의 (필수)</span></p>
                                    {validation.terms1 !== "필수 입력 사항입니다." ? null : <span className={styles.check}>{validation.terms1}</span>}
                                    <p><input type="checkbox" name="terms2" checked={checked.terms2} onChange={handleCheck} onFocus={handleFocus} ref={teRef2} /><span>전자금융거래 이용약관 동의 (필수)</span></p>
                                    {validation.terms2 !== "필수 입력 사항입니다." ? null : <span className={styles.check}>{validation.terms2}</span>}
                                    <p><input type="checkbox" name="terms3" checked={checked.terms3} onChange={handleCheck} onFocus={handleFocus} /><span>마케팅 정보 메일, SMS 수신동의 (선택)</span></p>
                                </div>
                            </li>
                            <li className={styles.joinLi}>
                                <Recaptcha
                                    sitekey="6Le3b04pAAAAAGD2R6tStUEK4LbSNvurS-8-NmDj"
                                    onChange={value => setCaptcha(value)}
                                />
                            </li>
                        </ul>
                        <button type='submit' className={styles.joinBtn}>회원가입</button>
                    </form>
                </div>
            </div >
        </>
    );
}

