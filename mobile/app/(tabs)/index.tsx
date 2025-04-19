import { Image, StyleSheet, Platform, TouchableOpacity, Button, } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f668', dark: '#8a2b2b' }}
      headerImage={
        <Image
          source={require('@/assets/images/logobanco2.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo ao seu banco digítal!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">saldo:</ThemedText>
        <ThemedText>
       <ThemedText type="defaultSemiBold">1,50</ThemedText> 
        </ThemedText>
      </ThemedView>
      <Button
  title="cartões"
  color="#6b2f2f"
    accessibilityLabel="Seus cartões"
  
/>
      <Button
  title="poupança"
  color="#6b2f2f"
  accessibilityLabel="poupança"
/>
<Button
  title="pix"
  color="#6b2f2f"
  accessibilityLabel="pix"
/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 1,
    marginBottom: 8,
    
  },
  reactLogo: {
    height: 300,  
    width: '100%', 
    position: 'relative',
    top: 0, 
  },
});
