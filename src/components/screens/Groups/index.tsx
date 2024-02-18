import { useState } from 'react';
import { FlatList } from 'react-native';
import {Header} from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList';
import  * as S  from './styles';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([])


  return (
	<S.Container>
    <Header />
    <Highlight  
    title="Squads"
    subTitle= "Jogue com seu squad!"
    
    />

    <FlatList
     data={groups}
     keyExtractor={item => item}
      renderItem={({item}) => (
        <GroupCard
         title={item}
         />
      )}

      contentContainerStyle={groups.length === 0 && {flex: 1}}
      ListEmptyComponent={() => <EmptyList message="Você ainda não tem gupos cadastrados!"/>}
    />
 
	  
	</S.Container>
    

    
  );
}

