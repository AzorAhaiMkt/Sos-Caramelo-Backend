-- CreateTable
CREATE TABLE "chamados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_solicitacao" TEXT NOT NULL,
    "tipo_solicitacao" TEXT NOT NULL,
    "descricao_solicitacao" TEXT NOT NULL,
    "image_solicitacao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
