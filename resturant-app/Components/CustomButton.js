import {Pressable, StyleSheet, Text} from 'react-native';


export default function CustomButton({ title, onPress, variant = 'primary', disabled = false }) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        
            style={({ pressed }) => [
                styles.button,
                variant === 'primary' ? styles.primary : styles.secondary,
                pressed && styles.pressed,
                disabled && styles.disabled
            ]}
        >
            <Text style={[styles.text, variant === 'primary' ? styles.primaryText : styles.secondaryText]}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignItems: 'center',
    },
 // Ifylld röd knapp
  primary: {
    backgroundColor: '#c0392b',
  },
  // Vit knapp med röd ram
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c0392b',
  },
  // Effekt när knappen trycks ned
  pressed: {
    opacity: 0.7,
  },
  // Effekt när knappen är avstängd
  disabled: {
    opacity: 0.4,
  },
  // Gemensam textstil
  text: {
    fontWeight: '600',
  },
  // Vit text på röd knapp
  primaryText: {
    color: '#fff',
  },
  // Röd text på vit knapp
  secondaryText: {
    color: '#c0392b',
  },
});