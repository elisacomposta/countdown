import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import styles from "./Card.styles";
import { useRouter } from "expo-router";

interface cardProps { title: string, time: number, color: string };

export function Card({ title, time, color }: cardProps) {
  const { t } = useTranslation();
  const router = useRouter();

  const handlePress = () => {
    const state = {
      title: title,
      time: time,
      color: color
    };
    router.push({ pathname: "/detail", params: state });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.title} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{title}</Text>
        <Text style={styles.time} adjustsFontSizeToFit numberOfLines={4}>{time} {t('days', { count: time })}</Text>
      </View>
    </TouchableOpacity>
  );
}
