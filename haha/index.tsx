import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FileDocs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [answer, setAnswer] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Load saved data from AsyncStorage
    loadData();
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleAnswerChange = text => {
    setAnswer(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const saveData = async () => {
    try {
      // Save data to AsyncStorage
      await AsyncStorage.setItem('answer', answer);
      await AsyncStorage.setItem('email', email);
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const loadData = async () => {
    try {
      // Load data from AsyncStorage
      const savedAnswer = await AsyncStorage.getItem('answer');
      const savedEmail = await AsyncStorage.getItem('email');

      if (savedAnswer !== null) {
        setAnswer(savedAnswer);
      }

      if (savedEmail !== null) {
        setEmail(savedEmail);
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={{width: 350, height: 100, marginTop: 10, marginLeft: 20}}
            source={require('../assets/th1.png')}
          />
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 25}}>
          <Text style={{fontSize: 33, marginLeft: 20, color: 'black'}}>
            Góp ý cho ứng dụng{'\n'} App News
          </Text>
        </View>
        <Text>
          -------------------------------------------------------------------------------------------------
        </Text>
        <View
          style={{backgroundColor: 'white', borderRadius: 25, marginTop: 20}}>
          <Text style={{fontSize: 26, marginLeft: 20, color: 'black'}}>
            Theo ban, ứng dụng App News có điểm gì cần cải thiện để bạn có trải
            nghiệm đọc tốt hơn?
          </Text>

          <TextInput
            style={{marginTop: 20, marginLeft: 20, fontSize: 18}}
            placeholder="Câu trả lời của bạn"
            value={answer}
            onChangeText={handleAnswerChange}
          />
        </View>
        <Text>
          -------------------------------------------------------------------------------------------------
        </Text>
        <View>
          <Text style={{fontSize: 26, marginLeft: 20, color: 'black'}}>
            Hệ điều hành của thiết bị
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isChecked}
              onValueChange={handleCheckboxChange}
              tintColors={{true: '#1877F2', false: 'gray'}}
              boxType="circle"
              lineWidth={1}
            />
            <Text style={{color: 'black'}}>Android </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isChecked1}
              onValueChange={handleCheckboxChange1}
              tintColors={{true: '#1877F2', false: 'gray'}}
              boxType="circle"
              lineWidth={1}
            />
            <Text style={{color: 'black'}}>IOS </Text>
          </View>
        </View>
        <Text>
          -------------------------------------------------------------------------------------------------
        </Text>
        <View>
          <Text style={{fontSize: 26, marginLeft: 20, color: 'black'}}>
            Email của bạn (không bắt buộc):
          </Text>

          <TextInput
            style={{marginTop: 20, marginLeft: 20, fontSize: 18}}
            placeholder="Câu trả lời của bạn"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <Text>
          -------------------------------------------------------------------------------------------------
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 40,
              backgroundColor: '#AF2655',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={saveData} // Save data when the button is pressed
          >
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Gửi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 150}}>
            <Text style={{fontWeight: 'bold', color: '#AF2655', fontSize: 18}}>
              Xóa hết câu trả lời
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{fontSize: 14, marginLeft: 20, color: 'black', marginTop: 20}}>
          Không bao giờ gửi mật khẩu thông qua Google Biểu mẫu.
        </Text>
        <Text
          style={{fontSize: 14, marginLeft: 20, color: 'black', marginTop: 20}}>
          Nội dung này không phải do Google tạo ra hay xác nhận.
        </Text>
        <Text
          style={{fontSize: 30, marginLeft: 70, color: 'black', marginTop: 20}}>
          Google Biểu mẫu
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
});

export default FileDocs;
