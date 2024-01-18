-- 데이터 정해야함
use findjeju;
select database();

create user 'root'@'192.168.50.31' identified by '1234';
 grant all privileges on *.* to root@192.168.50.31;
 flush privileges;
 show grants for 'root'@'192.168.50.31';
 commit;
 
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
insert into fj_member(name,id,password,nickname,email,phone,address,user_img) values('관리자','test1','$2a$10$TcZs4tDeBpTJNAnVHg65U.m0DsqsTj0eH1gLkulWOfnNv1H96sfwG','5조','try226@naver.com','01012345678','경기도 부천시 소사구', 'uploads/1705483262637-239436975_smile.jpg');

select name,id,password,nickname,email,phone,address,user_img as image,sms_check from fj_member where id = 'test';
delete from fj_member where id = 'test1';
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

delete from fj_review;

select * from fj_review;

delete from fj_review where rid=27;


drop table fj_review;

select id, contentid, contenttypeid, review_text, review_img, rdate from fj_review where contentid=? and contenttypeid=?;
insert into fj_review(id, contentid, contenttypeid, review_text) 
	values('try226',33,3333,'test');
    
select r.id, user_img, contentid, contenttypeid, review_text, review_img, rdate from fj_review r, fj_member m where r.id=m.id and contentid=3026711 and contenttypeid=12;


-- 좋아요, 스크랩 테이블
create table fj_scrap(
	sid int auto_increment primary key,
	contentid int not null,
    contenttypeid int not null,
    like_count int,
    scrap_count int
);

select * from fj_scrap;