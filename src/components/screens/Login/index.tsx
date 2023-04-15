import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';
import { useAppSelector } from '../../../Redux/hooks';
import { addToData } from '../../../Redux/userDataSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
const Login = ({navigation}: any) => {
  const [email,setEmail]=useState<String>('');
  const [password,setPassword]=useState<String>('');
  const userData=useSelector((state:RootState)=>state.userData.userData)
  console.log('userData', userData)
  const [error,setError]=useState<any>({
     emailError:false,
     passwordError:false
});
  
  const handleEmail=( val:any)=>{
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)){
          setEmail(val)
          setError({...error,emailError:false})
        }
        else{
          setError({...error,emailError:true});
        }
  }
  const handlePassword=(val:any)=>{
       if(val.length<5){
       
        setError({...error, passwordError:true})
       }
       else{
        setError( {...error,passwordError:false})
        setPassword(val)
       }
  }
  const handleLogin=()=>{
  const isLogin=  userData?.find(val=>val.email==email&&val.password==password)
   if(isLogin){
      navigation.navigate('homePage')
   }
    
   
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TextInput style={styled.input} placeholder="Enter email" onChangeText={handleEmail} />
   
     { error.  emailError&& <Text style={{color:'red'}}>Enter valid email</Text>}
      <TextInput style={styled.input} placeholder="Enter password" onChangeText={handlePassword} />
      { error.  passwordError&& <Text style={{color:'red'}}>Enter valid password</Text>}
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={{
            margin: 37,
            width: 79,
            height: 37,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            elevation: 5,
          }}onPress={handleLogin}>
          <Text style={{color: '#FFFFFF'}} >Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('signUp')}
          style={{
            margin: 37,
            width: 79,
            height: 37,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            elevation: 5,
          }}>
          <Text style={{color: '#FFFFFF'}}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styled = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '80%',
    marginTop: 34,
  },
});
export default Login;
