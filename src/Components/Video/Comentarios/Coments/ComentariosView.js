import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, FlatList} from "react-native";
import { Style } from "./Style";
import { ipBd } from "../../../../../controllerIP";

export default function Coments({route}){
    const {videoId} = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/comments.php?videoId='+videoId)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
    }, []);
 
    return(
        <FlatList 
        data={data}
        keyExtractor={ (post) => post.id}
        renderItem={ ({item}) => (
            <>    
            {!! item && (
            <View style={Style.container}>
                {item.commentName  && (
                    <Text style={Style.Name}>{item.commentName} </Text>
                )}
                {item.text  && (
                    <Text style={Style.comentario}> {item.text} </Text>
                )}
            </View>
        )}
            </>
        )}

        />
    );
}