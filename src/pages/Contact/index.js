import React, {useState} from 'react'
import {
  Container,
  BlurContant,
  Form,
  InputInformatation,
  TextArea,
  SubmitButton,
  SubmitTextButton,
} from './styles'
import {StatusBar} from 'react-native'
import ContactBG from '../../assets/images/contactBG.jpg'

function Contact(props) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const contact = {name, email, message}

  const handleForm = function() {
    return contact
  }
  return (
    <Container source={ContactBG}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BlurContant>
        <Form>
          <InputInformatation
            placeholder="tip your name"
            onChangeText={text => setName(text)}
          />
          <InputInformatation
            placeholder="tip your email"
            onChangeText={text => setEmail(text)}
          />
          <TextArea
            placeholder="tip your message"
            onChangeText={text => setMessage(text)}
          />
          <SubmitButton onPress={handleForm}>
            <SubmitTextButton>send</SubmitTextButton>
          </SubmitButton>
        </Form>
      </BlurContant>
    </Container>
  )
}
export default Contact
