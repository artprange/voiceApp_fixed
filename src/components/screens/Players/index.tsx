import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, PlayersNumber } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState } from "react";

export function Players() {
	const [team, setTeam] = useState("Time A");

	const [player, setPlayer] = useState([]);

	return (
		<Container>
			<Header showBackButton />

			<Highlight
				title="Squad"
				subTitle="Adicione os n00bs que você quer carregar"
			/>
			<Form>
				<Input
					placeholder="Digite o nome do jogador"
					autoCorrect={false}
				/>

				<ButtonIcon icon="add" />
			</Form>

			<HeaderList>
			<FlatList
				data={["Time A", "Time B"]}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Filter
						title={item}
						isActive={item === team}
						onPress={()=> setTeam(item)}
					/>
				)}
				horizontal
			/>
			<PlayersNumber>
				
			</PlayersNumber>
				{player.length} 
			</HeaderList>
		</Container>
	);
}
