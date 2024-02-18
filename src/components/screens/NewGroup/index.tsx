import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

export function NewGroup(){
    return(
        <Container>
            <Header
              showBackButton
            />

            <Content>
                <Icon/>
                <Highlight
                title="Novo grupo"
                subTitle="Crie um novo grupo para jogar com os noobs dos seus amigos!"
                />

                <Button
                title="Criar novo grupo"
                />

            </Content>
        </Container>
    )
}