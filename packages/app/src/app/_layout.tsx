import { Provider } from "urql";
import "../global.css";
import { Slot } from "expo-router";
import { client } from "@/lib/urql.config";

export default function Layout() {
  return (
    <Provider value={client}>
      <Slot />
    </Provider>
  )
    ;
}
