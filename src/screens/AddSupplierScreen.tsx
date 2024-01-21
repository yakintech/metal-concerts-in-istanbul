import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import axios from 'axios'


const AddSupplierScreen = () => {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")


    const add = () => {
        let newSupplier = {
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle
        }

        axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
            .then(res => {
               Alert.alert("Başarılı", "Tedarikçi başarıyla eklendi.")
            })

    }



  return (<>
        <View>
            <Text>Şirket Adı</Text>
            <TextInput onChangeText={setcompanyName}/>
        </View>
        <View>
            <Text>İletişim Adı</Text>
            <TextInput onChangeText={setcontactName}/>
        </View>
        <View>
            <Text>İletişim Ünvanı</Text>
            <TextInput onChangeText={setcontactTitle}/>
        </View>
        <View>
            <Button onPress={add}>Add</Button>
        </View>
  </>
  )
}

export default AddSupplierScreen