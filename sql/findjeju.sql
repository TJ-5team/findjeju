-- 데이터 정해야함
use findjeju;
select database();

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

insert into fj_member(name,id,password,nickname,email,phone,address,user_img) values('관리자','test','$2a$10$TcZs4tDeBpTJNAnVHg65U.m0DsqsTj0eH1gLkulWOfnNv1H96sfwG','5조','try226@naver.com','01012345678','경기도 부천시 소사구', 'path');

select * from fj_member;

-- 리뷰 테이블
create table fj_review(
    rid int auto_increment primary key, 
	id varchar(50), 
    contentid int not null,
    contenttypeid int not null,
    review_text varchar(500),
    review_img varchar(300),
    rdate date,
    constraint fj_review_id_fk foreign key(id) references fj_member(id) on update cascade on delete cascade
);

select * from fj_review;

delete from fj_review where rid=1;


drop table fj_review;

select id, contentid, contenttypeid, review_text, review_img, rdate from fj_review where contentid=? and contenttypeid=?;
insert into fj_review(id, contentid, contenttypeid, review_text) 
	values('try226',33,3333,'test');

-- 좋아요, 스크랩 테이블
create table fj_scrap(
	sid int auto_increment primary key,
	contentid int not null,
    contenttypeid int not null,
    like_count int,
    scrap_count int
);

select * from fj_scrap;



