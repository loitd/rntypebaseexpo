import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class AppHeader extends Component {
    render(){
        return(
            <Header transparent style={{marginTop:0}}>
                <Left>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>RNTypeBaseExpo</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Icon name='search' />
                    </Button>
                    <Button transparent>
                    <Icon name='heart' />
                    </Button>
                    <Button transparent>
                    <Icon name='more' />
                    </Button>
                </Right>
            </Header>
        )
    }
}