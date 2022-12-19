import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import ProfileScreen from "./ProfileScreen.js";
import Dashboard from "./Dashboard";
import LearnFlatList from "./LearnFlatList";
import Settings from "./Settings";
import Chatting from "./Chatting";
import SettingsScreen from "./SettingsScreen";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="LearnFlatList" component={LearnFlatList} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Chatting" component={Chatting} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
