import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Divider, TextInput } from 'react-native-paper'
import { concertsList } from '../../data/concertsList'
import DatePicker from 'react-native-date-picker'
import dayjs from 'dayjs'
import 'dayjs/locale/tr'


const ConcertsScreen = ({ navigation }: any) => {

  dayjs.locale('tr')

  const [concerts, setconcerts] = useState(concertsList)

  const [startDate, setStartDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const [endDate, setendDate] = useState(new Date())
  const [open2, setOpen2] = useState(false)


  const searchByName = (name: string) => {

    var name = name.trim()

    let filteredConcerts = concertsList.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

    setconcerts(filteredConcerts)

  }


  const searchByDate = () => {

    let startDateWithFormat = dayjs(startDate).format("DD-MM-YYYY")
    let endDateWithFormat = dayjs(endDate).format("DD-MM-YYYY")



    let filteredConcerts = concertsList.filter(item => dayjs(item.date, "DD-MM-YYYY").isAfter(startDateWithFormat) && dayjs(item.date, "DD-MM-YYYY").isBefore(endDateWithFormat))

    setconcerts(filteredConcerts)

  }



  return (<>
    <View style={{ paddingLeft: '3%', paddingRight: '3%' }}>

      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>

        <Text>{dayjs(startDate).format('DD MMMM dddd')}</Text>
        <Button onPress={() => setOpen(true)} mode="contained" style={{ marginBottom: '2%', marginLeft: 5 }}>
          Başlangıç Tarihi
        </Button>
      </View>

      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>

        <Text>{dayjs(endDate).format('DD MMMM dddd')}</Text>
        <Button onPress={() => setOpen2(true)} mode="contained" style={{ marginBottom: '2%', marginLeft: 5 }}>
          Bitiş Tarihi
        </Button>
      </View>
      <View>
        <Button onPress={() => searchByDate()} mode="contained">Tarih Aralığına Göre Ara</Button>
        <Button onPress={() => setconcerts(concertsList)}>Filtre Temizle</Button>
      </View>
      <DatePicker
        modal
        open={open}
        date={startDate}
        onConfirm={(date) => {
          setOpen(false)
          setStartDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode="date"
      />

      <DatePicker
        modal
        open={open2}
        date={endDate}
        onConfirm={(date) => {
          setOpen2(false)
          setendDate(date)
        }}
        onCancel={() => {
          setOpen2(false)
        }}
        mode="date"

      />

      <Divider style={{ marginBottom: '2%' }} />


      <TextInput
        label="Search by name"
        onChangeText={text => searchByName(text)}
        style={{ marginBottom: '2%' }}
      />


      <FlatList
        data={concerts}
        renderItem={({ item }) => {
          item.date = dayjs(item.date, "DD-MM-YYYY").format('DD MMMM dddd HH:mm')

          return <>
            <Pressable onPress={() => navigation.navigate("ConcertDetail", {
              item: item
            }) }>
              <Card key={item.id}>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Title titleStyle={{ fontSize: 25 }} title={item.name} subtitle={item.date} />
                <Card.Content>
                  <Text>{item.description}</Text>
                </Card.Content>
              </Card>
            </Pressable>

          </>
        }
        }

      />



    </View>


  </>)
}

export default ConcertsScreen



var name = "Çağatay" //string
var age = 24 //number
var isMarried = false //boolean

var myArray = [1, 2, 3, 4, 5] //array

var myObject = {
  name: "Çağatay",
  age: 24,
  isMarried: false
} //object


