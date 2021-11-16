import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, Image,
  TouchableOpacity,
  View, TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Styles } from './SSheet';
import { LoginDataApi } from '../../apiCalling/LoginDataApi';
import { icons } from '../../utils/Images';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      email: null,
      cap: null,

    };
  }
  componentDidMount() {
    console.log("login data =>", this.state.password, this.state.email);
    this.props.LoginDataApi(this.state.password, this.state.email)
  }
  componentDidUpdate(prev) {
    if (this.props.LoginData != prev.LoginData) {
      if (this.props.LoginData.type == 'true') {
        this.setState({
          isLoading: false
        })
      }
      else {
        this.setState({
          isLoading: false
        })
        this.props.navigation.navigate('login');
      }
    }
  }
  render() {
    return (
      <SafeAreaView >
        <View style={Styles.container}>
          <View style={{ marginTop: 20, height: '10%', justifyContent: 'center',backgroundColor:'yellow',elevation:8 }}>
            <Text style={Styles.Textstyle}> LOGIN PAGE</Text>
          </View>
          {/* ========username textinput view=============== */}
          <View style={{ height: 55, width: '85%', margin: '8%', borderWidth: 2, borderRadius: 15, borderColor: 'grey', marginTop: '25%', flexDirection: 'column' }}>
            <View style={{ backgroundColor: 'white', marginLeft: 20, height: 15, bottom: 10, justifyContent: 'center', width: 65, alignContent: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', alignSelf: 'center' }}>Username</Text>
            </View>
            <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                style={{ alignSelf: 'auto', marginTop: '2%', height: '55%', marginStart: 10, }}
                source={icons.user} />
              <TextInput
                style={{ marginLeft: '2%', width: '85%', marginBottom: '2%' }}
                onChangeText={(username) => this.setState({ username })}
              />
            </View>
          </View>
          {/* =============password textinput view=========== */}
          <View style={{ height: 55, width: '85%', margin: '8%', borderWidth: 2, borderRadius: 15, borderColor: 'grey', marginTop: '5%', flexDirection: 'column', marginTop: 10 }}>
            <View style={{ backgroundColor: 'white', marginLeft: 20, height: 15, bottom: 10, justifyContent: 'center', width: 65, alignContent: 'center', }}>
              <Text style={{ fontSize: 12, color: 'grey', alignSelf: 'center' }}>Password</Text>
            </View>
            <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                style={{ alignSelf: 'auto', marginTop: '2%', height: '55%', marginStart: 10 }}
                source={icons.lock} />
              <TextInput
                style={{ marginLeft: '2%', width: '78%', marginBottom: '2%', }}
                onChangeText={(password) => this.setState({ password })}
              // placeholder='Password'
              />
              <Image
                resizeMode="contain"
                style={{ alignSelf: 'auto', marginTop: '2%', height: '55%', }}
                source={icons.eye} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: '8%', justifyContent: 'center', marginRight: 20 }}>
            <Text style={{ marginLeft: '33%', alignSelf: 'center' }}>CA9B7U</Text>
            <Image
              style={{ marginLeft: '3%', alignSelf: 'center' }}
              source={icons.refresh} />
            <View style={{ height: 40, width: '33%', borderWidth: 1, borderRadius: 10, marginLeft: '3%', alignSelf: 'center' }}>
              <TextInput
                style={{ marginLeft: '8%', height: 40, }}
                placeholder="Enter Captcha"
                onChangeText={(cap) => this.setState({ cap })}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={{ justifyContent: 'center', height: 45, width: '75%', backgroundColor: '#3399FF', alignSelf: 'center', borderRadius: 15, marginTop: 20 }}
              onPress={() => { Alert.alert("Login successfull") }}>
              <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
// =====api calling==========
const mapStateToProps = state => ({
  LoginData: state.LoginDataResponse
});
const dispatchStateToProps = dispatch => ({
  LoginDataApi: (password, email) => { dispatch(loadLoginData(password, email)) }
});
export default connect(mapStateToProps, dispatchStateToProps)(Login);
