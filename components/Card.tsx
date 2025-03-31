import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "./Card.styles";

interface cardProps { title: string, time: number, color: string };

export function Card({ title, time, color }: cardProps) {
  const { t } = useTranslation();

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.title} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{title}</Text>
      <Text style={styles.time} adjustsFontSizeToFit numberOfLines={4}>{t('days', { count: time })}</Text>
    </View>
  );
}
