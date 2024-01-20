import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { concertsList } from '../data/concertsList'

const ConcertsScreen = () => {

  return (<>
    <ScrollView style={{ paddingLeft: '3%', paddingRight: '3%' }}>

      {
        concertsList.map((item, index) => {
          return <Card key={item.id}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Title titleStyle={{ fontSize: 25 }} title={item.name} subtitle={item.date} />
            <Card.Content>
              <Text>{item.description}</Text>
            </Card.Content>
          </Card>
        }
        )
      }



    </ScrollView>


  </>)
}

export default ConcertsScreen