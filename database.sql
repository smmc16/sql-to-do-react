CREATE TABLE "todo" (
  "id" serial primary key,
  "todo" varchar(200),
  "complete" boolean
);

INSERT INTO "todo" 
	("todo", "complete")
VALUES
	('Go to the grocery store', false);