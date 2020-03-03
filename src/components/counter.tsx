import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View, Form, Item, Input, Label } from 'native-base';

export default class CounterComponent extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
          <Text>Redux Saga</Text>
          <Button onPress={()=>{ this.props.onDecrement(1); }}>
            <Text>Decrese</Text>
          </Button>
          <Text>Count: {this.props.times}</Text>
      </Container>
    );
  }
}