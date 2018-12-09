insert into users(username, email, password)
values($1,$2,$3)
returning user_id,username,email