import React, { useState } from 'react';
import styles from './styles.module.css';
import ImageUpload from '../../imageUpload/ImageUpload';
export default function Join() {

    const [selectedValue, setSelectedValue] = useState('');
    const [form, setForm] = useState({ name: '', id: '', pass: '', passcheck: '', nickname: '', email: '', echeck: '', phone1: '', phone2: '', phone3: '' });
    const [image, setImage] = useState(null);
    let pattern_num = /[0-9]/;	// 숫자 
    let pattern_eng = /[a-zA-Z]/;	// 문자 
    let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

    const [check, setCheck] = useState(false);
    const [focus, setFocus] = useState(false);
    const [blur, setBlur] = useState(true);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const fnSubmit = (e) => {



    }

    const fnChange = (e) => {

        const { name, value } = e.target

        if (name === 'name' && value) {
            setCheck(true)
        } else {
            setCheck(false)
        }

        if (name === 'id' && pattern_kor.test(value)) {

            alert("한글은 입력할 수 없습니다.");
            return false

        }

        if (name === 'pass' && value.length < 9) {

            console.log('비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.');

        }

        setForm({ ...form, [name]: value });

        console.log(form);

    }

    const getImage = (e, d) => {
        setImage(e);
        // console.log(d);
        // ImageUpload파일에서 데이터 받아옴
    }

    const handleFocus = (e) => {

        const { name } = e.target;

        setFocus(true)

    }

    /* const handleBlur = (e) => {
        const { name, value } = e.target;
        setBlur(true)

                console.log(value.length);
                if (value.length === 0) {
                    setFocus({ ...focus, [name]: true })
                } else {
                    setFocus({ ...focus, [name]: false })
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
                                <input type="text" name="name" id="name" value={form.name} onChange={fnChange} placeholder='이름' onFocus={handleFocus} />
                                {!check && focus ? <span>필수 입력 항목입니다.</span> : null}
                            </li>
                            <li className={styles.joinLi}>
                                <label id="id">* 아이디</label>
                                <input type="text" name="id" id="id" value={form.id} onChange={fnChange} placeholder='아이디' />
                            </li>
                            <li className={styles.joinLi}>
                                <label id="pass">* 비밀번호</label>
                                <input type="text" name="pass" id="pass" value={form.pass} onChange={fnChange} placeholder='비밀번호' />
                            </li>
                            <li className={styles.joinLi}>
                                <label id="passcheck">* 비밀번호 체크</label>
                                <input type="text" name="passcheck" id="passcheck" value={form.passcheck} onChange={fnChange} placeholder='비밀번호 확인' />
                            </li>
                            <li className={styles.joinLi}>
                                <label id="nickname">* 닉네임</label>
                                <input type="text" name="nickname" id="nickname" value={form.nickname} onChange={fnChange} placeholder='닉네임' />
                            </li>
                            <li className={styles.joinLi}>
                                <label id="email">* 이메일</label>
                                <div className={styles.emailWrap}>
                                    <input type="text" name="email" id="email" className={styles.emailInput} value={form.email} onChange={fnChange} placeholder='이메일' />
                                    <span>@</span>
                                    {selectedValue === 'manual'
                                        ?
                                        <div>
                                            <input type='text' name='echeck' value={form.echeck} onChange={fnChange} />
                                            <span className={styles.emailClose} onClick={() => {
                                                setSelectedValue('')
                                            }}>x</span>
                                        </div>
                                        :
                                        <select name="echeck" id="echeck" value={selectedValue}  // select의 value를 state와 연동
                                            onChange={handleChange}>
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
                                <button type='button' className={styles.emailBtn}>
                                    이메일 인증하기
                                </button>
                                <div className={styles.emailCodeBox}>
                                    <p className={styles.desCode}>이메일로 전송된 인증코드를 입력해주세요.</p>
                                    <div>
                                        <input type="text" placeholder='인증코드 6자리 입력' />
                                        <button>확인</button>
                                    </div>
                                    <p>이메일을 받지 못하셨나요? <span>이메일 재전송하기</span></p>
                                </div>
                            </li>
                            <li className={styles.joinLi}>
                                <label id="phone">* 핸드폰번호</label>
                                <div className={styles.phoneWrap}>
                                    <input type="text" name="phone1" id="phone" value={form.phone1} onChange={fnChange} placeholder='010' />
                                    <span>-</span>
                                    <input type="text" name="phone2" id="phone" value={form.phone2} onChange={fnChange} placeholder='1234' />
                                    <span>-</span>
                                    <input type="text" name="phone3" id="phone" value={form.phone3} onChange={fnChange} placeholder='5678' />
                                </div>
                            </li>
                            <li className={styles.joinLi}>
                                <label id="postal">* 우편번호</label>
                                <div className={styles.postalWrap}>
                                    <input type="text" name="postal" id="postal" value={form.postal} onChange={fnChange} placeholder='우편번호 입력' />
                                    <button className={styles.postalBtn}>우편번호 검색</button>
                                </div>
                            </li>
                            <li className={styles.joinLi}>
                                <label id="address">* 주소</label>
                                <div className={styles.addressWrap}>
                                    <input type="text" name="address" id="address" value={form.address} onChange={fnChange} />
                                    <input type="text" name="address" id="address" value={form.address} onChange={fnChange} />
                                </div>
                            </li>
                            <li className={styles.joinLi}>
                                <label id="upload">* 사진 업로드</label>
                                <input type="hidden" name="upload" placeholder="image" value={image} />
                                <ImageUpload getImage={getImage} />
                            </li>
                        </ul>
                    </form>
                </div>
            </div >
        </>
    );
}

