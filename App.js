
import React,{useState} from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Text>Enable</Text>
        <Switch 
          trackColor={{ false: "#581845", true: "#ff06b5" }}
          thumbColor={isEnabled ? "#cb0590" : "#54384c"}
          value={isEnabled}
          onValueChange={toggleSwitch} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  }
});
