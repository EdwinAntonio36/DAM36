import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>To-Do-List</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextBody}>Lista de guejos:</Text>
        </View>
        <ScrollView style={styles.bodyContent}>
          <CheckBox title="DMCVI" containerStyle={styles.CheckBox}/>
          <CheckBox title="GTAVI" containerStyle={styles.CheckBox}/>
          <CheckBox title="CoDBO6" containerStyle={styles.CheckBox}/>
          <CheckBox title="L4D3" containerStyle={styles.CheckBox}/>
          <CheckBox title="HALO6" containerStyle={styles.CheckBox}/>
          <CheckBox title="Yirs" containerStyle={styles.CheckBox}/>
          <CheckBox title="Nier" containerStyle={styles.CheckBox}/>
          <CheckBox title="Dokkan" containerStyle={styles.CheckBox}/>
          <CheckBox title="Sparking" containerStyle={styles.CheckBox}/>
          <CheckBox title="Zero" containerStyle={styles.CheckBox}/>
          <CheckBox title="XV" containerStyle={styles.CheckBox}/>
          <CheckBox title="FF" containerStyle={styles.CheckBox}/>
          <CheckBox title="LOL" containerStyle={styles.CheckBox}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#6832a8',
    height: '10%',
    width: '100%',
    marginTop:0,
    textAlign:'justify',
    justifyContent:'center'   
  },
  title:{
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 20
  },
  body:{
    height:'90%',
    maxWidth: '100%',
    backgroundColor:'#ecf0f1',

  },
  titleContainer:{
    backgroundColor: 'pink',
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleTextBody:{
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodyContent:{
    width: '100%',
    marginBottom: '10%', 
  },
  CheckBox:{
    backgroundColor:'#ecf0f1',
    width: '50%',
    fontSize: 15,
    marginLeft: '20%',
  }

});
