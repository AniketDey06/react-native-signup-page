import { useState } from "react"
import { Image, Text, TextInput, View, Pressable } from "react-native"

export default function App() {
  const [name, setName] = useState("")

  return (
    <View>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem est minus
        temporibus tenetur deserunt labore odio omnis ab dicta eius qui, quo
        nobis numquam dolore in distinctio iusto unde excepturi aliquam? Labore
        libero cupiditate distinctio vero fuga laboriosam dignissimos obcaecati
        alias culpa debitis accusantium rerum, quia, doloribus quisquam
        voluptatem consequuntur quo maxime voluptate? Amet sunt nesciunt
        officiis quibusdam? Facere saepe hic consectetur distinctio repudiandae,
        rem expedita enim officiis nostrum fugiat nulla, tempora dolorum?
        Quibusdam nisi ullam eligendi nulla placeat numquam dignissimos
        distinctio iste, sint officiis cupiditate fuga laudantium dolor
        perferendis quo neque dicta nam reprehenderit. Saepe at nesciunt dicta
        a.
      </Text>

      <Image
        source={{ uri: "https://aniketdey.in/images1/new.jpg" }}
        width={200}
        height={200}
        blurRadius={10}
      />

      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          width: 20,
          height: 20,
        }}
        blurRadius={10}
      />

      <TextInput 
        placeholder="Enter number" 
        value={name}
        onChangeText={setName}
        placeholderTextColor={'red'}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          paddingLeft: 10,
          marginTop: 20,
        }}
      />

      <Pressable 
        style={
          ({pressed}) => ({
            backgroundColor: pressed ? 'blue' : 'gray',
            padding: 10,
            margin: 20,
            borderRadius: 4,
          })
          
        }
      >
        {
          ({pressed}) => (
            pressed ? <Text>pressing</Text> : <Text>not pressing</Text>
          )
        }
        
      </Pressable>
    </View>
  )
}
