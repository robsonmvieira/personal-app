import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.ImageBackground`
  flex: 1;
`
export const BlurContant = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  background-color: rgba(23, 41, 59, 0.7);
  flex: 1;
  padding: 30px;
`
export const Form = styled.View`
  width: 100%;
  height: 100%;
`
export const InputInformatation = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
  placeholderMarginLeft: '100px',
  placeholderFontSize: '20px',
})`
  border-bottom-width: 1px;
  border-color: #fff;
  border-style: solid;
  margin-bottom: 40px;
  color: #fff;
`
export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  width: 100%;
  min-height: 100px;
  border: 1px;
  border-color: #fff;
  border-style: solid;
  color: #fff;
  margin-top: 20px;
`
export const SubmitButton = styled(RectButton)`
  background: rgb(23, 41, 59);
  height: 50px;
  border-radius: 50px;
  margin-top: 20px;
`
export const SubmitTextButton = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding-top: 10px;
`
