import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Image } from "react-native";

type Props = {
    navigation: NativeStackNavigationProp<any>;
};

interface Recipe {
    id: string;
    title: string;
    ingredients: string[];
    steps: string[];
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const initialRecipes: Recipe[] = [
        {
            id: "1",
            title: "Spaghetti alla Carbonara",
            ingredients: ["Spaghetti", "Huevos", "Pancetta", "Queso Pecorino", "Pimienta negra"],
            steps: [
                "Hervir agua con sal en una olla grande y cocinar los spaghetti hasta que estén al dente.",
                "Mientras tanto, cortar la pancetta en cubos pequeños y dorarla en una sartén sin aceite hasta que esté crujiente.",
                "En un bol, batir las yemas de huevo con el queso Pecorino rallado y una pizca de pimienta negra.",
                "Escurrir la pasta reservando un poco del agua de cocción, agregar la pancetta y la mezcla de huevo y queso.",
                "Mezclar rápidamente fuera del fuego, añadiendo un poco del agua de cocción para obtener una salsa cremosa."
            ],
        },
        {
            id: "2",
            title: "Lasagna alla Bolognese",
            ingredients: ["Láminas de lasaña", "Carne molida", "Salsa boloñesa", "Bechamel", "Queso parmesano"],
            steps: [
                "Preparar la salsa boloñesa: sofreír cebolla, zanahoria y apio picados, luego añadir la carne molida y dorar.",
                "Agregar salsa de tomate y vino tinto, cocinar a fuego lento durante 30 minutos.",
                "Preparar la salsa bechamel: derretir mantequilla, agregar harina, mezclar y añadir leche poco a poco hasta espesar.",
                "En una bandeja para horno, colocar una capa de salsa boloñesa, luego láminas de lasaña, bechamel y parmesano.",
                "Repetir el proceso hasta llenar la bandeja y terminar con queso por encima. Hornear a 180°C durante 35-40 minutos."
            ],
        },
        {
            id: "3",
            title: "Risotto ai Funghi",
            ingredients: ["Arroz Arborio", "Champiñones", "Caldo de pollo", "Queso parmesano", "Mantequilla"],
            steps: [
                "Limpiar y picar los champiñones, luego saltearlos en mantequilla hasta que suelten su jugo.",
                "Agregar el arroz Arborio y tostarlo por 2 minutos sin que se queme.",
                "Añadir un poco de caldo caliente y remover constantemente hasta que se absorba.",
                "Repetir el proceso añadiendo caldo poco a poco, removiendo para que el arroz libere almidón.",
                "Cuando esté cremoso y al dente, añadir mantequilla y parmesano, mezclar y servir inmediatamente."
            ],
        },
        {
            id: "4",
            title: "Pizza Margherita",
            ingredients: ["Masa de pizza", "Salsa de tomate", "Mozzarella", "Albahaca fresca", "Aceite de oliva"],
            steps: [
                "Extender la masa sobre una bandeja para horno previamente enharinada.",
                "Cubrir con salsa de tomate distribuida uniformemente.",
                "Agregar mozzarella fresca en rodajas por toda la superficie.",
                "Hornear en horno precalentado a 220°C durante 10-12 minutos o hasta que la masa esté dorada.",
                "Al retirar del horno, decorar con hojas frescas de albahaca y un chorrito de aceite de oliva."
            ],
        },
        {
            id: "5",
            title: "Fettuccine Alfredo",
            ingredients: ["Fettuccine", "Mantequilla", "Queso parmesano", "Crema", "Pimienta negra"],
            steps: [
                "Cocinar los fettuccine en abundante agua con sal hasta que estén al dente.",
                "En una sartén grande, derretir mantequilla a fuego bajo.",
                "Agregar la crema y calentar sin que hierva.",
                "Incorporar el queso parmesano rallado y mezclar hasta obtener una salsa cremosa.",
                "Añadir la pasta escurrida a la salsa, mezclar bien y servir con pimienta negra recién molida."
            ],
        },
        {
            id: "6",
            title: "Gnocchi di Patate",
            ingredients: ["Papas", "Harina", "Huevo", "Sal", "Salsa de tomate"],
            steps: [
                "Hervir las papas con piel hasta que estén blandas, luego pelarlas y hacer puré.",
                "Mezclar el puré con harina, huevo y sal hasta obtener una masa suave.",
                "Formar cilindros con la masa y cortar en pequeños trozos, luego presionarlos con un tenedor para dar forma.",
                "Hervir los gnocchi en agua con sal hasta que floten en la superficie.",
                "Servir con salsa de tomate caliente y queso parmesano por encima."
            ],
        },
        {
            id: "7",
            title: "Bruschetta al Pomodoro",
            ingredients: ["Pan", "Tomates", "Ajo", "Albahaca", "Aceite de oliva"],
            steps: [
                "Tostar rebanadas de pan en horno o sartén hasta que estén doradas.",
                "Picar los tomates en cubos pequeños y mezclarlos con sal, pimienta y aceite de oliva.",
                "Frotar un diente de ajo en cada rebanada de pan tostado para dar sabor.",
                "Colocar la mezcla de tomate sobre el pan.",
                "Decorar con hojas frescas de albahaca antes de servir."
            ],
        },
        {
            id: "8",
            title: "Parmigiana di Melanzane",
            ingredients: ["Berenjenas", "Salsa de tomate", "Mozzarella", "Parmesano", "Albahaca"],
            steps: [
                "Cortar las berenjenas en rodajas y salarlas para quitar el amargor, dejarlas reposar 30 minutos.",
                "Secar las berenjenas y freírlas en aceite hasta dorar, luego escurrir en papel absorbente.",
                "En una fuente, colocar capas de berenjena, salsa de tomate y queso.",
                "Repetir hasta llenar y terminar con queso parmesano encima.",
                "Hornear a 180°C durante 30 minutos hasta gratinar."
            ],
        },
        {
            id: "9",
            title: "Tiramisu",
            ingredients: ["Bizcochos de soletilla", "Café", "Mascarpone", "Cacao en polvo", "Huevos"],
            steps: [
                "Preparar café fuerte y dejar enfriar.",
                "Separar claras y yemas, batir las yemas con azúcar y añadir mascarpone.",
                "Montar las claras a punto de nieve y mezclarlas suavemente con la crema de mascarpone.",
                "Remojar los bizcochos en el café sin empaparlos demasiado y colocarlos en una bandeja.",
                "Alternar capas de bizcochos y crema, terminando con crema y espolvoreando cacao en polvo. Refrigerar mínimo 4 horas."
            ],
        },
        {
            id: "10",
            title: "Panna Cotta",
            ingredients: ["Crema de leche", "Azúcar", "Gelatina", "Vainilla", "Frutas rojas"],
            steps: [
                "Hidratar la gelatina en agua fría durante 5 minutos.",
                "Calentar la crema de leche con el azúcar y la vainilla sin que hierva.",
                "Añadir la gelatina hidratada y mezclar hasta que se disuelva.",
                "Verter la mezcla en moldes y refrigerar por al menos 4 horas.",
                "Servir con frutas rojas y un poco de salsa de frutos del bosque."
            ],
        },
    ];

    const [recipes] = useState<Recipe[]>(initialRecipes);
    const [searchText, setSearchText] = useState("");

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo_restaurant.png')} style={{ width: 300, height: 200, alignSelf: "center" }} />

            <Text style={styles.title}>Benvenuto!!</Text>

            <TextInput
                style={styles.input}
                placeholder="Buscar receta..."
                value={searchText}
                onChangeText={setSearchText}
            />

            <FlatList
                style={{ flex: 1, width: "100%" }}
                data={filteredRecipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.task}>
                        <Text style={styles.taskText}>{item.title}</Text>
                        <Text style={styles.ingredientsText}>
                            Ingredientes: {item.ingredients.join(", ")}
                        </Text>

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() =>
                                navigation.navigate("Recipes", {
                                    title: item.title,
                                    ingredients: item.ingredients,
                                    steps: item.steps,
                                })
                            }
                        >
                            <Text style={styles.addButtonText}>Ver receta</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
    logo: {
        width: 300,
        height: 150,
        alignSelf: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#fff",
        width: "100%",
        alignSelf: "center",
    },
    addButton: {
        backgroundColor: "#007b10ff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        alignSelf: "flex-end",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    task: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    taskText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    ingredientsText: {
        color: "gray",
        fontSize: 14,
        marginBottom: 10,
    },
});

export default HomeScreen;
