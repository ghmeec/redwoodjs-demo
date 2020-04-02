# Migration `20200402212033-contact`

This migration has been generated at 4/2/2020, 9:20:33 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Contact" (
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "email" TEXT NOT NULL DEFAULT '' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL DEFAULT '' ,
    "name" TEXT NOT NULL DEFAULT '' 
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200402200034-posts..20200402212033-contact
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 // api/prisma/schema.prisma
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -14,5 +14,14 @@
   id        Int @id @default(autoincrement())
   title     String
   body      String
   createdAt DateTime @default(now())
+}
+
+
+model Contact {
+  id        Int @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
 }
```


