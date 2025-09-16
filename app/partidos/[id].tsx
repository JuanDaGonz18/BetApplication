import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function MatchDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const confirmarApuesta = (opcion: string) => {
  Alert.alert("✅ Apuesta realizada", `Has apostado en: ${opcion}`);
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Partido #{id}</Text>
      <Text style={styles.subtitle}>Cuotas disponibles:</Text>

      <TouchableOpacity
        style={styles.betButton}
        onPress={() => confirmarApuesta("🏆 Gana Equipo 1 (1.80)")}
      >
        <Text style={styles.betText}>🏆 Gana Equipo 1 (1.80)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.betButton}
        onPress={() => confirmarApuesta("⚽ Empate (3.20)")}
      >
        <Text style={styles.betText}>⚽ Empate (3.20)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.betButton}
        onPress={() => confirmarApuesta("🔥 Gana Equipo 2 (2.10)")}
      >
        <Text style={styles.betText}>🔥 Gana Equipo 2 (2.10)</Text>
      </TouchableOpacity>

      {/* Botón para volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>⬅️ Volver</Text>
      </TouchableOpacity>

      {/* Tabs de navegación */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push("/main")}>
          <Text style={styles.tabText}>🏠 Menú</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/main/(tabs)/perfil")}>
          <Text style={styles.tabText}>👤 Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#041c13", padding: 20 },
  title: { fontSize: 26, color: "#FFD700", fontWeight: "bold", marginBottom: 15 },
  subtitle: { fontSize: 18, color: "#c8d6c4", marginBottom: 20 },
  betButton: { backgroundColor: "#14532d", padding: 12, borderRadius: 10, marginBottom: 12, width: "80%", alignItems: "center" },
  betText: { color: "#FFD700", fontSize: 16, fontWeight: "bold" },
  backButton: { marginTop: 20, padding: 12, backgroundColor: "#FFD700", borderRadius: 10 },
  backText: { color: "#041c13", fontSize: 16, fontWeight: "bold" },
  tabBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0d2a1a",
    paddingVertical: 12,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#14532d",
  },
  tabText: { color: "#FFD700", fontSize: 16, fontWeight: "bold" },
});
