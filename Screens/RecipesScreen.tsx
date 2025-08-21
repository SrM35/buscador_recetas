import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Recipes: {
    title: string;
    ingredients: string[];
    steps: string[];
  };
};

type Props = NativeStackScreenProps<RootStackParamList, "Recipes">;

const RecipesScreen: React.FC<Props> = ({ route }) => {
  const { title, ingredients, steps } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>Ingredientes:</Text>
      {ingredients.map((item, index) => (
        <Text key={index} style={styles.text}>
          - {item}
        </Text>
      ))}

      <Text style={styles.subtitle}>Preparación:</Text>
      {steps.map((step, index) => (
        <Text key={index} style={styles.text}>
          {index + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f2f2f2" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 10, marginBottom: 5 },
  text: { fontSize: 16, marginBottom: 5 },
});

export default RecipesScreen;
