import { Image, StyleSheet, Platform, Pressable, Text, View, Button} from 'react-native'; 
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

      <ThemedView style={styles.inputFake}>
        <ThemedText> Saldo: 1,50 </ThemedText>
      </ThemedView>

     
      <View style={styles.buttonRow}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>pix</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Poupança</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Pagar Boleto</Text>
        </Pressable>
      </View>

      <Button
        title="Cartões"
        color="#995656"
        accessibilityLabel="Seus cartões"
      />
      <Button
        title="Empréstimos"
        color="#995656"
        accessibilityLabel="empréstimos"
      />
      <Button
        title="Seguros"
        color="#995656"
        accessibilityLabel="Seguros"
        
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
  inputFake: {
    borderColor: '#6b2f2f',
    borderWidth: 4,
    borderRadius: 8,
    padding: 5,
    marginVertical: 5,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'rgb(248, 234, 234)',
    alignItems: 'center'
  },
  buttonRow: {
    flexDirection: 'row',  
    justifyContent: 'space-around', 
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6b2f2f',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    minWidth: 50, 
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});