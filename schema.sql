-- create tables here

create table todos
(
    id serial primary key,
    todo_items varchar(200),
    complete boolean DEFAULT false,
    pending boolean DEFAULT false
);  