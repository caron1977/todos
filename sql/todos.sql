BEGIN;

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- REVOKE ALL default privileges from all users, especially "create mytable (id int);"
REVOKE ALL ON SCHEMA public FROM public;

-- GRANT, always GRANT at the end!
GRANT SELECT,INSERT,UPDATE,DELETE ON ALL TABLES IN SCHEMA public TO tecitsc_dbuser;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO tecitsc_dbuser;
GRANT USAGE ON SCHEMA public TO tecitsc_dbuser;
