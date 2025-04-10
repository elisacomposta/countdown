import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import styles from "./Card.styles";
import { useRouter } from "expo-router";
import { Event } from "@/types/interfaces";
import { computeRemainingDays } from "@/utils/event";

export function Card({ event }: { event: Event }) {
  const { t } = useTranslation();
  const router = useRouter();

  const remainingDays = computeRemainingDays(event);

  const handlePress = () => {
    router.push({ pathname: "/detail", params: { event: JSON.stringify(event) } });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, { backgroundColor: event.color }]}>
        <Text style={styles.title} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{event.title}</Text>
        <Text style={styles.time} adjustsFontSizeToFit numberOfLines={4}>{remainingDays} {t('days', { count: remainingDays })}</Text>
      </View>
    </TouchableOpacity>
  );
}
