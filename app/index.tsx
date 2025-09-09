import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(auth)/login" />;
}


//implementar navegacion <Link>
//investigar router.navigate hay que hacer la navegacion de las tres pantallas
//caso de uso, tabs?
