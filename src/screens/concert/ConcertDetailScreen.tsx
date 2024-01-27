import { View, Text, Linking, Share } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

const ConcertDetailScreen = ({ route }: any) => {

    const { item } = route.params


    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              "Simply Share Anything across all social media platforms, isn't it awesome",
          });
          if (result.action === Share.sharedAction) {

            console.log(result);
            
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {

        }
      };

    return (<>
        <Card key={item.id}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Title titleStyle={{ fontSize: 25 }} title={item.name} subtitle={item.date} />
            <Card.Content>
                <Text>{item.description}</Text>
                <Text>{item.location}</Text>
                <Button
                    buttonColor='tomato'
                    textColor='white'
                    onPress={() => Linking.openURL(item.link)}
                >Get tickets</Button>
                <Button mode='outlined' onPress={() => onShare()}>Share</Button>
            </Card.Content>
        </Card>
    </>)
}

export default ConcertDetailScreen

