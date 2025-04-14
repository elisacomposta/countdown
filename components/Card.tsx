import { View, Text } from "react-native";
import { ScalePressable } from "./ScalePressable";
import { useTranslation } from "react-i18next";
import styles from "./Card.styles";
import { useRouter } from "expo-router";
import { Event } from "@/types/interfaces";
import { computeRemainingDays } from "@/utils/event";
import { useEventActions } from "@/hooks/useEventActions";

export function Card({ event, onDelete }: { event: Event, onDelete?: () => void }) {
  const { handleEventOptions } = useEventActions(event, onDelete);
  const { t } = useTranslation();
  const router = useRouter();

  const remainingDays = computeRemainingDays(event);

  const handlePress = () => {
    router.push({ pathname: "/detail", params: { eventStr: JSON.stringify(event) } });
  }

  const handleLongPress = () => {
    handleEventOptions();
  }

  return (
    <ScalePressable onPress={handlePress} onLongPress={handleLongPress}>
      <View style={[styles.card, { backgroundColor: event.color }]}>
        <Text style={styles.title} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{event.title}</Text>
        <Text style={styles.time} adjustsFontSizeToFit numberOfLines={4}>{remainingDays} {t('days', { count: remainingDays })}</Text>
      </View>
    </ScalePressable>
  );
}
