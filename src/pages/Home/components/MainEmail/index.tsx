import { useState } from "react";
import * as S from "./styles";

export const MainEmail = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      return alert("Informe seu e-mail!")
    } else if (!emailRegex.test(email)) {
      return alert("Por favor, informe um e-mail válido!");
    }

    setTimeout(() => {
      alert("E-mail inscrito com sucesso!")
      setEmail("");
    }, 2000);
  }

  return (
    <S.Container>
      <S.Text>
        <h2>SUBSCRIBE FOR THE QUEEN NEWS</h2>
        <p>Subscribe today to receive the latest Defend the Queen news, updates, behind-the-scenes content, offers, and more (including other news, products, events, and promotions) by email.</p>
      </S.Text>

      <S.Subscribe>
        <S.Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Button onClick={handleSubmit}>SUBSCRIBE</S.Button>
      </S.Subscribe>
    </S.Container>
  )
}