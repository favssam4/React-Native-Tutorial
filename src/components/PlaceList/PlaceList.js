import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {

    return (<FlatList style={styles.listContainer}
                     data={props.places}
                     renderItem={(info) =>(
                        <ListItem placeName={info.item.value} 
                                  placeImage={info.item.image}
                                  OnItemPressed={() => props.OnItemSelected(info.item.key)}>
                        </ListItem>
                     )}
            />
    );

};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});


export default placeList;