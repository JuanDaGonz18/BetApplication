import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Poppins_400Regular, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

/**
 * Pantalla de Login con estilo de casino/apuestas:
 * - Verde profundo lujoso con degradado
 * - Detalles en dorado
 * - Tipografía elegante (Poppins + Playfair Display)
 */
export default function LoginScreen() {
  // Cargar las fuentes antes de renderizar
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Mientras cargan las fuentes
  }

  return (
    <LinearGradient
      colors={["#0b3d2e", "#042f22"]} // Verde profundo casino
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Ícono premium */}
        <Ionicons name="cash-outline" size={90} color="#d4af37" style={styles.icon} />

        {/* Título con tipografía de lujo */}
        <Text style={styles.title}>BetApplication</Text>
        <Text style={styles.subtitle}>Tu suerte comienza aquí 🍀</Text>

        {/* Input de correo */}
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#c8d6c4"
          style={styles.input}
        />

        {/* Input de contraseña */}
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#c8d6c4"
          secureTextEntry
          style={styles.input}
        />

        {/* Botón de inicio */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        {/* Texto adicional */}
        <Text style={styles.footerText}>
          ¿Nuevo aquí? <Text style={styles.link}>Regístrate</Text>
        </Text>
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
  icon: {
    marginBottom: 15,
  },
  title: {
    fontSize: 38,
    fontFamily: "PlayfairDisplay_700Bold", // Fuente elegante
    color: "#d4af37", // Dorado
    marginBottom: 5,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#e0e0e0",
    marginBottom: 35,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.4)", // borde dorado suave
  },
  button: {
    width: "100%",
    backgroundColor: "#1b5e20", // Verde elegante
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: "#d4af37",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
  },
  footerText: {
    marginTop: 20,
    color: "#c8d6c4",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  link: {
    fontFamily: "Poppins_700Bold",
    color: "#d4af37",
    textDecorationLine: "underline",
  },
});
