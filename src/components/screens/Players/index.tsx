import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";


export function Players() {
  return (
    <Container>
        <Header showBackButton/>

        <Highlight
             title="Squad"
            subTitle="Adicione os n00bs que você quer carregar"
        />
     
    <ButtonIcon
      title=""
    />
    </Container>
  );
}