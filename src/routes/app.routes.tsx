import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups} from "../components/screens/Groups";
import { Players } from "../components/screens/Players";
import { NewGroup } from "@components/screens/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={ {headerShown: false}} >
			<Screen
				name="groups"
				component={Groups}
			/>

			<Screen
				name="new"
				component={NewGroup}
			/>

			<Screen
				name="players"
				component={Players}
			/>
		</Navigator>
	);
}
