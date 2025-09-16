import { CinzelDecorative_400Regular } from "@expo-google-fonts/cinzel-decorative";
import { PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function ResetScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    CinzelDecorative_400Regular,
  });

  const router = useRouter();
  const [email, setEmail] = useState("");

  if (!fontsLoaded) return null;

  const handleReset = () => {
    if (email) {
      alert("Correo de recuperación enviado a " + email);
      router.replace("/(auth)/login");
    } else {
      alert("Por favor ingresa tu correo electrónico.");
    }
  };

  return (
    <LinearGradient colors={["#092e20", "#041c13"]} style={styles.background}>
      <View style={styles.container}>
        {/* Título elegante */}
        <Text style={styles.title}>Recuperar contraseña</Text>
        <Text style={styles.subtitle}>
          Ingresa tu correo y recibe un enlace mágico 
        </Text>

        {/* Input correo */}
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#c8d6c4"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* Botón enviar */}
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Enviar correo de recuperación</Text>
        </TouchableOpacity>

        {/* Volver al login */}
        <Text style={styles.footerText}>
          ¿Recordaste tu clave?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/(auth)/login")}
          >
            Inicia sesión
          </Text>
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
  title: {
    fontSize: 38,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#FFD700",
    marginBottom: 6,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "CinzelDecorative_400Regular",
    color: "#e0e0e0",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 52,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 15,
    marginBottom: 18,
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    borderWidth: 1,
    borderColor: "rgba(255,215,0,0.5)",
  },
  button: {
    width: "100%",
    backgroundColor: "#14532d",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: "#FFD700",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  footerText: {
    marginTop: 20,
    color: "#c8d6c4",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  link: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFD700",
    textDecorationLine: "underline",
  },
});
