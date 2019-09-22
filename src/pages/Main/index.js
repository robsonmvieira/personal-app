import React from 'react'
import BGImage from '../../assets/images/mainBG.jpg'
import {StatusBar, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  BgContainer,
  BlurContant,
  TitleMainText,
  SubtitleMain,
  DateInformation,
  LineStyle,
  BoxIconContainer,
  BoxIcon,
} from './styles'

export default function Main(props) {
  const {navigate} = props.navigation
  const date = new Date()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BgContainer source={BGImage}>
        <BlurContant>
          <TitleMainText>Robson Maia</TitleMainText>
          <SubtitleMain>I'm Javascript and Ruby developer</SubtitleMain>
          <DateInformation>
            {date.getHours()} : {date.getMinutes()} hs.
          </DateInformation>
          <DateInformation>
            {days[date.getDay()]}, {date.getDay()}
          </DateInformation>
          <DateInformation>
            {monthNames[date.getMonth()]} {date.getFullYear()}
          </DateInformation>
          <LineStyle />
          <BoxIconContainer>
            <BoxIcon onPress={() => navigate('Contact')}>
              <Icon size={40} name="contacts" />
            </BoxIcon>
            <BoxIcon onPress={() => navigate('About')}>
              <Icon size={40} name="dashboard"></Icon>
            </BoxIcon>
          </BoxIconContainer>
          <BoxIconContainer>
            <BoxIcon onPress={() => navigate('Portfolio')}>
              <Icon size={40} name="fingerprint" />
            </BoxIcon>
          </BoxIconContainer>
        </BlurContant>
      </BgContainer>
    </Container>
  )
}
