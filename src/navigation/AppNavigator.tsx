import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screen/HomeScreen';
import TrainingSelectionScreen from 'screen/TrainingSelectionScreen';
import CostasScreen from 'screen/CostasScreen';
import PeitoScreen from 'screen/PeitoScreen';
import PernasScreen from 'screen/PernasScreen';
import BracosScreen from 'screen/BracosScreen';
import AbdomenScreen from 'screen/AbdomenScreen';
import CardioScreen from 'screen/CardioScreen';
import AlongamentoScreen from 'screen/AlongamentoScreen';
import AddExerciseScreen from 'screen/AddExerciseScreen';
import NewTrainingScreen from 'screen/NewTrainingScreen';
import MinhasRotinasScreen from 'screen/MinhasRotinasScreen';
import RotinaDetalhesScreen from 'screen/RotinaDetalhesScreen';

interface Exercise {
  exerciseName: string;
  sets: string;
  reps: string;
  load: string;
}

type RootStackParamList = {
  Home: undefined;
  TrainingSelection: undefined;
  Costas: undefined;
  Peito: undefined;
  Pernas: undefined;
  Bracos: undefined;
  Abdômen: undefined;
  Cardio: undefined;
  Alongamento: undefined;
  AddExercise: { trainingType: string; exercises?: Exercise[] };
  NewTraining: { trainingType: string; exercises: Exercise[] };
  MinhasRotinas: undefined;
  RotinaDetalhes: { exercise: Exercise };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meu App' }} />
        <Stack.Screen name="TrainingSelection" component={TrainingSelectionScreen} options={{ title: 'Seleção de Treino' }} />
        <Stack.Screen name="Costas" component={CostasScreen} options={{ title: 'Treino de Costas' }} />
        <Stack.Screen name="Peito" component={PeitoScreen} options={{ title: 'Treino de Peito' }} />
        <Stack.Screen name="Pernas" component={PernasScreen} options={{ title: 'Treino de Pernas' }} />
        <Stack.Screen name="Bracos" component={BracosScreen} options={{ title: 'Treino de Braços' }} />
        <Stack.Screen name="Abdômen" component={AbdomenScreen} options={{ title: 'Treino de Abdômen' }} />
        <Stack.Screen name="Cardio" component={CardioScreen} options={{ title: 'Treino de Cardio' }} />
        <Stack.Screen name="Alongamento" component={AlongamentoScreen} options={{ title: 'Treino de Alongamento' }} />
        <Stack.Screen name="AddExercise" component={AddExerciseScreen} options={{ title: 'Adicionar Exercício' }} />
        <Stack.Screen name="NewTraining" component={NewTrainingScreen} options={{ title: 'Novo Treino' }} />
        <Stack.Screen name="MinhasRotinas" component={MinhasRotinasScreen} options={{ title: 'Minhas Rotinas' }} />
        <Stack.Screen
          name="RotinaDetalhes"
          component={RotinaDetalhesScreen as React.ComponentType}
          options={{ title: 'Detalhes da Rotina' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
