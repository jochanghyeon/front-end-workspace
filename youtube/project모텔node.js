const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/reserve", (req, res) => {
  const { name, phone, checkin, checkout, roomType } = req.body;

  // 이메일 발송 설정 (전화번호 확인을 위해 이메일 대신 전화 메시지 API를 사용할 수도 있습니다)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-email@gmail.com", // 고객의 이메일이 아닌 호텔 관리자 이메일로 보냄
    subject: "모텔 예약 확인",
    text: `${name}님이 예약을 완료했습니다. 체크인: ${checkin}, 체크아웃: ${checkout}, 객실 타입: ${roomType}, 전화번호: ${phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("예약 확인 이메일 발송 실패");
    } else {
      res.send("예약이 완료되었습니다.");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
