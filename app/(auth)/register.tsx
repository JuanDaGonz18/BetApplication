import { AuthContext } from "@/contexts/AuthContext"; // 👈 importa tu contexto
import { CinzelDecorative_400Regular } from "@expo-google-fonts/cinzel-decorative";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    CinzelDecorative_400Regular,
  });

  const router = useRouter();
  const { register } = useContext(AuthContext); // 👈 usa la función register

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState(""); // 👈 nuevo estado para el nombre

  if (!fontsLoaded) return null;

  const handleRegister = async () => {
    if (!email || !password || password !== confirm || !name) {
      alert(
        "Completa todos los campos y asegúrate que las contraseñas coincidan."
      );
      return;
    }

    try {
      await register(email, password, name); // 👈 pasamos el nombre
      alert("Cuenta creada con éxito 🎉");
      router.replace("/(auth)/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <LinearGradient colors={["#092e20", "#041c13"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Empieza tu camino ganador </Text>

        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor="#c8d6c4"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#c8d6c4"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#c8d6c4"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Confirmar contraseña"
          placeholderTextColor="#c8d6c4"
          secureTextEntry
          style={styles.input}
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          ¿Ya tienes cuenta?{" "}
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
    fontSize: 40,
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
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    letterSpacing: 0.5,
  },
  footerText: {
    marginTop: 20,
    color: "#c8d6c4",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  link: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFD700",
    textDecorationLine: "underline",
  },
});
