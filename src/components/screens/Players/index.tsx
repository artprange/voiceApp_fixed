import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";


export function Players() {
  return (
    <Container>
        <Header showBackButton/>

        <Highlight
             title="Squad"
            subTitle="Adicione os n00bs que você quer carregar"
        />
     
    </Container>
  );
}