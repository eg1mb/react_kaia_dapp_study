import express from "express";
import cors from "cors";
import { prepare, process, apply, result } from "./service/dummy_billing";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/prepare", (req, res) => {
  setTimeout(() => {
    const data = prepare(req.body.situration);

    if (data.code === "00") res.status(200).json(data);
    else res.status(500).json(data);
  }, 3000);
});

app.post("/process", (req, res) => {
  setTimeout(() => {
    const data = process(req.body.situration);

    if (data.code === "00") res.status(200).json(data);
    else res.status(500).json(data);
  }, 5000);
});

app.get("/process", (req, res) => {
  setTimeout(() => {
    const situration = req.query.situration === "true";

    const data = process(situration, req.query.orderProcessId as string);

    if (data.code === "00") res.status(200).json(data);
    else res.status(500).json(data);
  }, 3000);
});

app.post("/apply", (req, res) => {
  setTimeout(() => {
    const data = apply(req.body.situration);

    if (data.code === "00") res.status(200).json(data);
    else res.status(500).json(data);
  }, 3000);
});

app.post("/result", (req, res) => {
  setTimeout(() => {
    const data = result(req.body.situration);

    if (data.code === "00") res.status(200).json(data);
    else res.status(500).json(data);
  }, 3000);
});

app.listen(PORT, () => {
  console.log(
    `더미 백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`
  );
  console.log(`요청 성공/실패를 제어하려면 situration 값을 사용하세요:`);
  console.log(`  situration === true => 성공`);
  console.log(`  situration === false => 실패`);
});
