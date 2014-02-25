.. title: PostgreSQL Commond Line Cheat Sheet
.. link: http://blog.jasonmeridth.com/2012/10/02/postgresql-command-line-cheat-sheet.html 
.. description: 
.. date: 2012/10/02 00:00:00
.. slug: postgresql-command-line-cheat-sheet 
.. type: text
.. tags: postgresql, command line

change to postgres user and open psql prompt

```bash
sudo -u postgres psql postgres
```

list databases

```bash
postgres=# \l
```

list roles

```bash
postgres=# \du
```

create role

```bash
postgres=#CREATE ROLE demorole1 WITH LOGIN ENCRYPTED PASSWORD 'password1' CREATEDB;
```

alter role

```bash
postgres=#ALTER ROLE demorole1 CREATEROLE CREATEDB REPLICATION SUPERUSER;
```

drop role

```bash
postgres=#DROP ROLE demorole1;
```

create database

```bash
postgres=#CREATE DATABASE demodb1 WITH OWNER demorole1 ENCODING 'UTF8';
```

grant privileges to new user

```bash
GRANT ALL PRIVILEGES ON DATABASE demodb1 TO demorole1;
```

drop database

```bash
postgres=#DROP DATABASE demodb1;
```

connect to database

```bash
\c <databasename>
```

list tables in connected database

```bash
\dt
```

list columns on table

```bash
\d <tablename>
```

backup database

```bash
pg_dump <databasename> > <outfile> 
```
