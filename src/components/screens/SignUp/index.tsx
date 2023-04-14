import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React,{useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { addToData } from '../../../Redux/userDataSlice';

const SignUp = ({navigation}: {navigation: any}) => {
 
 const [user,setUser]=useState({
  name:'',
  email:'',
  mobile:'',
  password:''

 })

  const [showError, setShowError] = useState<any>({
    name: false,
    email: false,
    phoneNumber: false,
    password: false,
    allAbove: false,
  });

  const handleName =(val:string)=> {
    // setShowError({... prev ,[name] :true})

    if (!/^[a-zA-Z ]+$/.test(val)) {
      setShowError({...showError, name: true});
      // setNameError('name is invalid');
    } else {
      setShowError({...showError, name: false});
      setUser({...user,name:val});
    }
  }
  const handleEmail = (val:any) => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val,
      )
    ) {
      setShowError({...showError, email: true});
    } else {
      setShowError({...showError, email: false});
      setUser({...user,email:val});
    }
  };
  const handleMobile = (val:any )=> {
    if (!/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/.test(val)) {
      setShowError({...showError, phoneNumber: true});
    } else {
      setShowError({...showError, phoneNumber: false});
      setUser({...user,mobile:val});
    }
  };
  const handlePassword = (val:any) => {
    if (val.length <= 8) {
      setShowError({...showError, password: true});
    } else {
      setShowError({...showError, password: false});
      setUser({...user,password:val})
    }
  };

  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <TextInput style={styled.input} placeholder="Enter your name" onChangeText={handleName} />
      {showError.name&&<Text style={{color:'red'}}>Enter valid name</Text>}
      <TextInput style={styled.input} placeholder="Enter email id" onChangeText={handleEmail} />
      {showError.email&&<Text style={{color:'red'}}>Enter valid email</Text>}
      <TextInput style={styled.input} placeholder="Enter mobile number" onChangeText={handleMobile} />
      {showError.phoneNumber&&<Text style={{color:'red'}}>Enter valid mobile number</Text>}
      <TextInput style={styled.input} placeholder="Enter password" onChangeText={handlePassword} />
      {showError.password&&<Text style={{color:'red'}}>Enter valid password</Text>}
      <Pressable style={styled.button} onPress={()=>useAppDispatch(addToData(user))}>
        <Text>Signup</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 12}}
        onPress={() => navigation.navigate('landing')}>
        <Text>Already Sign up login </Text>
      </Pressable>
    </View>
  );
};
const styled = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '70%',
    height: 45,
    marginTop: 34,
  },
  button: {
    width: 69,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    marginTop: 23,
  },
});
export default SignUp;
