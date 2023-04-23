create table users (
  user_id uuid default uuid_generate_v4() PRIMARY KEY,
  user_name varchar not null
);