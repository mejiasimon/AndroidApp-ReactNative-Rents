import {
    Text,
    View,
    Colors,
    Image,
    BaseInput,
    Button,
  } from "react-native-ui-lib";
  import { FlatList } from "react-native";
  import { Controller, useForm } from "react-hook-form";
  import { useState } from "react";
  import { TextInput,Card } from "react-native-paper";
  import { styles } from "../styles/styles";
  import { vehiculo } from "../services/information";
export default function List({navigation,route}){
    const renderCard = ({ item }) => (
        
        <View style={styles.card}>
            <Text style={styles.title}>{item.plate}</Text>
            <Text style={styles.description}>{item.brand}</Text>
            <Text style={styles.description}>{item.state? "disponible":"no disponible"}</Text>
        </View>
    );
return(
<View style={{flex:1,justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
<Image
        style={{ height: "12.5rem", width: "12.5rem" }}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/renting-63833.appspot.com/o/car-wash.png?alt=media&token=ea521cb8-2b34-4d1c-ae33-3efa9d6008a2",
        }}
></Image>
<FlatList
                data={vehiculo}
                keyExtractor={(item) => item.plate.toString()}
                renderItem={renderCard}
            />
</View>
)
}
