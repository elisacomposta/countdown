import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import styles from "./Card.styles";
import { useRouter } from "expo-router";
import { Event } from "@/types/interfaces";


export function Card({ event }: { event: Event }) {
  const { t } = useTranslation();
  const router = useRouter();

  const title = event.title;
  const color = event.color;
  const countdownDuration = event.endDate.getTime() - new Date().getTime()
  const remainingDays = countdownDuration > 0 ? Math.floor(countdownDuration / (1000 * 60 * 60 * 24)) + 1 : 0;

  const handlePress = () => {
    const state = {
      title: title,
      time: remainingDays,
      color: color
    };
    router.push({ pathname: "/detail", params: state });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.title} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{title}</Text>
        <Text style={styles.time} adjustsFontSizeToFit numberOfLines={4}>{remainingDays} {t('days', { count: remainingDays })}</Text>
      </View>
    </TouchableOpacity>
  );
}
