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
        <h2>Se inscreva para mais informações!</h2>
        <p>Inscreva-se com seu e-mail e receba as últimas novidades de Dyno Bomber!</p>
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