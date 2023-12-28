-- 데이터 정해야함


-- 멤버 테이블
create table fj_member(

		mid int auto_increment primary key,
        nickname varchar(200) not null,
        user_img varchar(500),
        id varchar(50) not null,
		password varchar(500) not null,
        email varchar(100),
		phone varchar(200)
        
);




