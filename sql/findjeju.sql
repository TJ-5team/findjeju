-- 데이터 정해야함


-- 멤버 테이블
create table fj_member(

        name varchar(15) not null,
        id varchar(50) not null primary key,
		password varchar(500) not null,
		nickname varchar(200) not null,
        email varchar(100),
		phone varchar(200),
        address varchar(200),
		user_img varchar(500),
        sms_check boolean
        
        
);

drop table fj_member;

insert into fj_member(name,id,password,nickname,email,phone,address,user_img) values('관리자','try226','1234','5조','try226@naver.com','01012345678','경기도 부천시 소사구', 'path');

select * from fj_member;





