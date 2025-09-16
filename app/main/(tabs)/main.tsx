import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
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
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    Poppins_400Regular,
    Poppins_600SemiBold,
    CinzelDecorative_400Regular,
  });

  if (!fontsLoaded) return null;

  // Lista de partidos
  const partidos = [
    { id: 1, name: "⚽ Barcelona vs Real Madrid" },
    { id: 2, name: "🔥 PSG vs Manchester City" },
    { id: 3, name: "🏟️ Boca Juniors vs River Plate" },
    { id: 4, name: "🇮🇹 Juventus vs AC Milan" },
    { id: 5, name: "🇩🇪 Bayern vs Borussia Dortmund" },
  ];

  return (
    <LinearGradient
      colors={["#0f2027", "#092e20", "#041c13"]}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          {/* Título principal */}
          <Text style={styles.title}>🏆 Bienvenido a BetApp</Text>
          <Text style={styles.subtitle}>
            Vive la emoción de tus partidos favoritos
          </Text>

          {/* Card de partidos */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎯 Próximos Partidos</Text>

            {partidos.map((partido) => (
              <TouchableOpacity
                key={partido.id}
                style={styles.matchButton}
                onPress={() => router.push(`/partidos/${partido.id}`)} // ✅ ruta correcta
              >
                <Text style={styles.cardText}>{partido.name}</Text>
              </TouchableOpacity>
            ))}

            {/* Botón ver más */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver todos los eventos</Text>
            </TouchableOpacity>
          </View>

          {/* Footer motivacional */}
          <Text style={styles.footer}>
            ✨ Apuesta con estilo, gana con pasión ✨
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  scroll: { flexGrow: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  title: {
    fontSize: 34,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "CinzelDecorative_400Regular",
    color: "#c8d6c4",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1.5,
    borderColor: "rgba(255,215,0,0.6)",
    shadowColor: "#FFD700",
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#FFD700",
    marginBottom: 16,
    textAlign: "center",
  },
  matchButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,215,0,0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#14532d",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: "#FFD700",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  footer: {
    marginTop: 35,
    fontSize: 14,
    color: "#c8d6c4",
    fontFamily: "CinzelDecorative_400Regular",
    textAlign: "center",
  },
});
