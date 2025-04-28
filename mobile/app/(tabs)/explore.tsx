import { StyleSheet, Image, Platform, View } from 'react-native';

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
  <View style={styles.transactionRow}>
    <ThemedText> Farmácia</ThemedText>
    <ThemedText style={styles.expenseText}>- R$30,67</ThemedText>
  </View>
</Collapsible>

<Collapsible title="15/04/25">
  <View style={styles.transactionRow}>
    <ThemedText> Netflix</ThemedText>
    <ThemedText style={styles.expenseText}>- R$39,90</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText> Uber</ThemedText>
    <ThemedText style={styles.expenseText}>- R$27,80</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText> Mercado Pão de Açúcar</ThemedText>
    <ThemedText style={styles.expenseText}>- R$143,75</ThemedText>
  </View>
</Collapsible>

<Collapsible title="02/04/25">
  <View style={styles.transactionRow}>
    <ThemedText> Transferência recebida</ThemedText>
    <ThemedText style={styles.incomeText}>+ R$150,00</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText> Ifood</ThemedText>
    <ThemedText style={styles.expenseText}>- R$34,90</ThemedText>
  </View>
</Collapsible>

<Collapsible title="26/03/25">
  <View style={styles.transactionRow}>
    <ThemedText> Spotify</ThemedText>
    <ThemedText style={styles.expenseText}>- R$19,99</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText> Padaria Delícia</ThemedText>
    <ThemedText style={styles.expenseText}>- R$9,86</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText>Transferência recebida</ThemedText>
    <ThemedText style={styles.incomeText}>+ R$30,00</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText> Academia FitLife</ThemedText>
    <ThemedText style={styles.expenseText}>- R$99,99</ThemedText>
  </View>
</Collapsible>

<Collapsible title="12/03/25">
  <View style={styles.transactionRow}>
    <ThemedText> Rappi Supermercado</ThemedText>
    <ThemedText style={styles.expenseText}>- R$172,40</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText>IFood</ThemedText>
    <ThemedText style={styles.expenseText}>- R$59,90</ThemedText>
  </View>
</Collapsible>

<Collapsible title="07/03/25">
  <View style={styles.transactionRow}>
    <ThemedText> Cinema Ingresso.com</ThemedText>
    <ThemedText style={styles.expenseText}>- R$32,00</ThemedText>
  </View>
  <View style={styles.transactionRow}>
    <ThemedText> Americanas</ThemedText>
    <ThemedText style={styles.expenseText}>- R$26,84</ThemedText>
  </View>
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
    gap: 12,
    marginVertical: 20,
    paddingHorizontal: 16, 
  },

  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor:'#4a1a1a',
  },
  expenseText: {
    color: '#c0392b', 
    fontWeight: '700',
    textShadowColor: '#aaa',  
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  incomeText: {
    color: '#27ae60',
    fontWeight: '600',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
