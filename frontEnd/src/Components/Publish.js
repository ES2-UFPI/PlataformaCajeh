/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
} from 'native-base';
import {material} from 'react-native-typography';

export default class Publish extends Component {
  render() {
    return (
      <Card
        style={{
          backgroundColor: 'rgba(255,255,255,1)',
          paddingTop: 5,
          borderTopLeftRadius: 200,
          elevation: 10,
        }}>
        <CardItem
          style={{
            backgroundColor: 'rgba(255,255,255,1)',
            height: 50,
            marginTop: 0,
            borderWidth: 0,
          }}>
          <Left>
            <Thumbnail
              source={require('../Acessibilidade.png')}
              style={{height: 30, width: 30}}
            />
            <Body>
              <Text
                style={{
                  color: 'rgba(0,0,0,0.9)',
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}>
                Cajeh
              </Text>
              <Text note>@danielcajeh</Text>
            </Body>
          </Left>
          <Right>
            <Text
              style={{
                color: 'rgba(255,100,0,1)',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}>
              11h ago
            </Text>
          </Right>
        </CardItem>
        <CardItem
          cardBody
          style={{
            backgroundColor: 'rgba(0,0,20,0.9)',
            borderColor: 'rgba(0,0,0,0.0)',
            height: 400,
            width: null,
            flex: 1,
            opacity: 0.9,
            zIndex: 0,
          }}>
          {/* Mudar a Cor Base da Publicação, variar de 0.5 até 1 */}
          <Text
            style={{
              color: 'orange',
              fontSize: 40,
              fontFamily: 'Permanent Marker',
              opacity: 1,
              zIndex: 3,
            }} />
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontFamily: 'Permanent Marker',
              opacity: 1,
              zIndex: 3,
            }} />
        </CardItem>
        <CardItem
          style={{
            backgroundColor: 'rgba(0,0,0,0.0)',
            borderBottomRightRadius: 20,
          }}>
          <Left>
          <Button transparent>
              <Icon active name="bookmark" />
              <Text>20 Saves</Text>
            </Button>
          </Left>
          <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
          </Body>
          <Right>
            <Button transparent>
            <Icon active name="alert" style={{color:'orange'}}/>
            <Text
              style={{
                color: 'rgba(255,100,0,1)',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}>
             0 Alert
            </Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
