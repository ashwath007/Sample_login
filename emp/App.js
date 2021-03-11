
import React,{useState} from 'react';

import {
  List,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Right,
  CheckBox,
  Title,
  H1,
  H4,
  Fab,
  Subtitle,
  Container,
  Spinner,
  Form,
  Item,
  Input,
  Header,
  Content,
  Label,
  Provider, 
  TextInput,
  Picker


} from 'native-base'

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native'
import DropDown from 'react-native-paper-dropdown';
const App = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState();
 
  const genderList = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];
 
  return (
    <>
      
      <Container style={styles.bac}>
        <View style={styles.gg}>
        <Text style={styles.txt}>
RAJASHEKAR
</Text>
        </View>

<ScrollView contentContainerStyle={{flexGrow:1}} style={styles.back}>
    <Text style={styles.eme}>
Emergency contact
    </Text>

    <Container style={{backgroundColor:'white'}}>
      
        <Content style={{marginTop:23,padding:13}}>
          <Form>
            <Item floatingLabel style={{marginBottom:12}}>
              <Label>Name</Label>
              <Input value="Vikraman" />
            </Item>
            
            <Item floatingLabel last style={{marginBottom:12}}>
              <Label>Contact Number</Label>
              <Input value="987654321"/>
            </Item>
            <Item floatingLabel last style={{marginBottom:12}}>
              <Label>Email ID</Label>
              <Input value="Rameshkumar@gmail.com"/>
              </Item>
              <Item floatingLabel last style={{marginBottom:12}}>
              <Label>Address</Label>
              <Input value="22/1 Ana nager, Peelamadu, Coimbatore"/>
              </Item>

          </Form>
          <View style={{marginLeft:223,marginTop:19}}>
      <Text style={{fontWeight: '#D82E2F',color:'red'}}>
      Add Another Contact

      </Text>
          </View>
      
      
      
        
        </Content>
      </Container> 
</ScrollView>

      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  bac:{
    backgroundColor:'#E8E8E8',

  },
  gg:{
    alignContent:'center',
    alignItems:'center'
  },
  txtn:{
    fontSize:16,
    color:'grey',
    marginTop:23,
    paddingLeft:35
  },
  containerStyle: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  txt:{
    fontWeight: 'bold',
    fontSize:17,
    marginTop:22
  },
  eme:{
    paddingLeft:35,
marginTop:35,
fontSize:18,
fontWeight: 'bold',
  },
  back:{
    marginTop:23,
    backgroundColor:'white',
    borderRadius:22
  }
});

export default App;
