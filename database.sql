CREATE TABLE "todo" (
  "id" serial primary key,
  "todo" varchar(200)
);

INSERT INTO "todo" 
	("todo")
VALUES
	('Go to the grocery store');