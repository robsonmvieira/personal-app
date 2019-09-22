import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.ImageBackground`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`
export const BlurContant = styled.View`
  background-color: rgba(23, 41, 59, 0.7);
  flex-grow: 1;
`
export const Form = styled.View`
  width: 100%;
  height: 100%;
  padding: 30px;
  margin-top: 50px;
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
  placeholderMarginLeft: '50px',
})`
  width: 100%;
  height: 250px;
  padding: 30px;
  border: 1px
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
