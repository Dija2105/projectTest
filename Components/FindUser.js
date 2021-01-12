// Components/FindUser.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,FlatList } from 'react-native'
import users from '../DataBase/UserData'
import UserItem from './UserItem'

class FindUser extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='un utilisateur'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
        data={users}
        keyExtractor={(item) => item.idUser.toString()}
        renderItem={({item}) => <UserItem user={item}/>}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default FindUser
