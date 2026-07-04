import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  LiraRPG API rodando em http://localhost:${PORT}`);
  console.log(`  Ambiente: ${process.env.NODE_ENV || "development"}`);
  console.log(`===============================================`);
});
