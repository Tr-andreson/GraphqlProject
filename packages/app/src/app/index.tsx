import { useFetchProductsQuery } from "@/__generated__/graphql";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  const [products] = useFetchProductsQuery()
  const { data, fetching, error } = products

  if (fetching) return <Text>Loading .....</Text>
  if (error) return <Text>{error.name}</Text>
  return (
    <View className="flex-1">
      <Text className="text-3xl">hello world</Text>
      {data.getProduct.map((_) => (
        <View>
          <Text >{_.name}</Text>
        </View>
      ))}
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="/">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Product
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/login"
          >
            Login
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}
