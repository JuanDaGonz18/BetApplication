import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import {
  PlayfairDisplay_700Bold,
  PlayfairDisplay_400Regular,
} from "@expo-google-fonts/playfair-display";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { CinzelDecorative_400Regular } from "@expo-google-fonts/cinzel-decorative";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    Poppins_400Regular,
    Poppins_600SemiBold,
    CinzelDecorative_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={["#092e20", "#041c13"]}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>🏆 Bienvenido a la App de Apuestas</Text>
        <Text style={styles.subtitle}>
          Aquí verás tus partidos, eventos y más.
        </Text>

        {/* Card central */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎯 Próximos Partidos</Text>
          <Text style={styles.cardText}>Barcelona vs Real Madrid</Text>
          <Text style={styles.cardText}>PSG vs Manchester City</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#FFD700",
    marginBottom: 8,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "CinzelDecorative_400Regular",
    color: "#c8d6c4",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,215,0,0.4)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
  },
  cardText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    marginBottom: 6,
    textAlign: "center",
  },
});
