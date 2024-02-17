import { useState } from 'react';
import { FlatList } from 'react-native';
import {Header} from '../../Header';
import { Highlight } from '../../HighLight';
import { GroupCard } from '../../GroupCard';
import  * as S  from './styles';


export function Groups() {
  const [groups, setGroups] = useState<string[]>(['n00bs', 'Call of Duty', 'Forza', 'BF2'])


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
         title={item
        }/>
      )}
    />
 
	  
	</S.Container>
    

    
  );
}

