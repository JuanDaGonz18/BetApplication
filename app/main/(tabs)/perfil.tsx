import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
import { useRouter } from "expo-router";

export default function PerfilScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    Poppins_400Regular,
    Poppins_600SemiBold,
    CinzelDecorative_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <LinearGradient colors={["#092e20", "#041c13"]} style={styles.background}>
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>👤 Perfil</Text>
        <Text style={styles.subtitle}>Configura tu cuenta y preferencias.</Text>

        {/* Card de info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📧 Correo:</Text>
          <Text style={styles.cardText}>usuario@betapp.com</Text>

          <Text style={styles.cardTitle}>💳 Suscripción:</Text>
          <Text style={styles.cardText}>Premium Activa</Text>

          <Text style={styles.cardTitle}>⚙️ Ajustes rápidos:</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>

          {/* Botón de Cerrar Sesión */}
          <TouchableOpacity
            style={[styles.button, styles.logout]}
            onPress={() => router.replace("/(auth)/login")}
          >
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
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
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#FFD700",
    marginTop: 10,
  },
  cardText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    marginBottom: 6,
  },
  button: {
    backgroundColor: "#14532d",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
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
  logout: {
    backgroundColor: "#661111",
  },
});
