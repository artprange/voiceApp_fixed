import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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

                <Input />

                <Button
                title="Criar novo grupo"
                style={{marginTop: 20}}
                />

            </Content>
        </Container>
    )
}