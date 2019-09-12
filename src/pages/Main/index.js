import React from 'react'
import {Text, Button} from 'react-native'

import {Container} from './styles'

export default function Main(props) {
  const {navigate} = props.navigation
  return (
    <Container>
      <Text>Main Screen!</Text>
      <Button
        title="Go to Contact screen"
        onPress={() => navigate('Contact')}
      />
    </Container>
  )
}
