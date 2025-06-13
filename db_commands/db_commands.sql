create table users(
	id serial primary key,
	name varchar(100),
	email varchar(100) unique not null,
	password text not null
);

create table tasks(
	id serial primary key,
	user_id integer references users(id) on delete cascade,
	title varchar(2550),
	description text,
	status varchar(50),
	deadline date
);

select * from users;