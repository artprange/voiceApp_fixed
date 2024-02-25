import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {
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

      <Filter title="Squad A"  />

		</Container>
	);
};