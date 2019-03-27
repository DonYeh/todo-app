-- create tables here

create table todos
(
    id serial primary key,
    todo_items varchar(200),
    is_done varchar(10),
    is_pending varchar(10)
);