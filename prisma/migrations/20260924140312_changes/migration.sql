-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genre" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0.00,
    "stock" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_posters" ("createdAt", "description", "height", "id", "image", "name", "price", "slug", "stock", "updatedAt", "width") SELECT "createdAt", "description", "height", "id", "image", "name", "price", "slug", "stock", "updatedAt", "width" FROM "posters";
DROP TABLE "posters";
ALTER TABLE "new_posters" RENAME TO "posters";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
