import React from 'react'
import {Text, TextInput, Button} from 'react-native'

import {Container} from './styles'

export default function Contact(props) {
  const {navigate} = props.navigation
  return (
    <Container>
      <Text>Contact Screen</Text>
      <Button title="go back to Main Screen" onPress={() => navigate('Main')} />
      <TextInput
        style={{
          height: 40,
          marginTop: 40,
          paddingLeft: 20,
          backgroundColor: '#fff',
        }}
        placeholder="tip your email"
      />
    </Container>
  )
}
