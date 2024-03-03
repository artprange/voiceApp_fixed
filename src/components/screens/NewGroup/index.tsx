import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup(){

    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('players', {group: 'Forza'});
       
    }

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

                <Input
                placeholder="Nome do Squad"
                 />

                <Button
                title="Criar novo grupo"
                style={{marginTop: 20}}
                onPress={handleNew}
                />

            </Content>
        </Container>
    )
}