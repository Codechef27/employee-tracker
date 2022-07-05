

INSERT INTO department (name)
VALUES 
   ('back of house'),
   ('front of house');

INSERT INTO roles (title, department_id, salary)
VALUES
   ('chef', 1, 100000),
   ('sous chef', 1, 80000),
   ('cook-1', 1, 50000),
   ('cook-2', 1, 40000),
   ('dish', 1, 28000),
   ('general manager', 2, 100000),
   ('bartender', 2, 60000),
   ('server', 2, 50000),
   ('host', 2, 28000),
   ('server assistant', 2, 28000);
  


INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES
    ('Bradley', 'Kennett', 1, NULL),
    ('Thomas', 'Keller', 2, 1),
    ('Anthony', 'Bourdaine', 2, 1),
    ('Bobby', 'Flay', 3, 1),
    ('David', 'Chang', 3, 1),
    ('Marco', 'Pierre-White', 4, 1),
    ('Masaharu', 'Morimotto', 4, 1),
    ('Gordon', 'Ramsey', 5, 1),
    ('Cat', 'Cora', 5, 1),
    ('Julia', 'Child', 6, NULL),
    ('Rachael', 'Ray', 7, 10),
    ('Giada', 'Laurentiis', 8, 10),
    ('Anne', 'Burrell', 8, 10),
    ('Wolfgang', 'Puck', 9, 10),
    ('Paula', 'Deen', 10, 10);




