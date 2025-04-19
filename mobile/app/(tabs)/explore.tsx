import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f668', dark: '#8a2b2b' }}
      headerImage={
        <IconSymbol
          size={0}
          color="#8a2b2b"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Extrato</ThemedText>
      </ThemedView>
      <Collapsible title="18/04/25">
      <ThemedText>-Farmacia -30,67</ThemedText>
      </Collapsible>
      <Collapsible title="15/04/25">
        <ThemedText>-Netflix -39,90</ThemedText>
        <ThemedText>-Uber -27,80</ThemedText>
        <ThemedText>-Mercado Pão de Açúcar -143,75</ThemedText>
      </Collapsible>
      <Collapsible title="02/04/25">
      <ThemedText>-Transferência recebida +150,00 </ThemedText>
      <ThemedText>-Ifood -34,90</ThemedText>
      </Collapsible>
      <Collapsible title="26/03/25">
      <ThemedText>-Spotify -19,99</ThemedText>
      <ThemedText>-Padaria Delícia -9,86</ThemedText>
      <ThemedText>-Transferência recebida + 30,00</ThemedText>
      <ThemedText>-Academia FitLife -99,99</ThemedText>
      </Collapsible>
      <Collapsible title="12/03/25">
      <ThemedText>-Rappi Supermercado -172,40</ThemedText>
      <ThemedText>-IFood -59,90</ThemedText>
     </Collapsible>
      <Collapsible title="07/03/25">
      <ThemedText>-Cinema Ingresso.com -32,00 </ThemedText>
      <ThemedText>-Americanas -26,84 </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
