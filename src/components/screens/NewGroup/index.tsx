import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createGroup } from "@storage/group/createGroup";




export function NewGroup(){

    const[group, setGroup] = useState('')

    const navigation = useNavigation();

    async function handleNew(){
        try{
            await createGroup(group);
            navigation.navigate('players', {group});

        } catch(error){
          console.log(error)
        }
    
       
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
                onChangeText={setGroup}
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