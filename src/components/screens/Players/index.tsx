import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, PlayersNumber } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
	group: string;
}


export function Players() {
	const [team, setTeam] = useState("Time A");
	const [player, setPlayer] = useState([]);
	const route = useRoute();
	const { group } = route.params as RouteParams;


	return (
		<Container>
			<Header showBackButton />

			<Highlight
				title={group}
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

			<FlatList
			data={player}
			keyExtractor={(item) => item}
			renderItem={({ item }) => (
				<PlayerCard name={item}
				onRemove={()=>{}} />
			)}


			ListEmptyComponent={()=>(
				<EmptyList
				 message="Nenhum jogador adicionado"
				  />
			)}

			

			
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={[{paddingBottom: 100},
			player.length === 0 && {flex: 1}
			]}
			/>

			<Button 
			title="Remover n00bs"
			type="SECONDARY"/>
		</Container>
	);
}
