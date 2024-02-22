import { TouchableOpacityProps } from "react-native";


import { Container, Icon } from "./styles";

 
type Props = TouchableOpacityProps & {
    title: string;

}

export function ButtonIcon({ }: Props){
    return(
        <Container>
            <Icon name="home" type="SECONDARY"/>
            
        </Container>

    )

}