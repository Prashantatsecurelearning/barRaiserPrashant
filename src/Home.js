/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  Touchable

} from 'react-native';

import APICall from './APICall';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export const Home = ({navigation}) => {


  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [carCrashData, setCarCrashData] = useState([])

  const fetchCarRecords = async(offset, limit) => {

   
    console.log(offset,limit)
    
    let limitlocal = offset+limit
    let carData = await fetch(
      `https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=${offset}&$limit=${limitlocal}`
    );
   

    P = await carData.json()
    setCarCrashData(P)
    setOffset(offset + limit)

  }

  const backgroundStyle = {
    backgroundColor: 'transparent',
    flex: 1,
  };

  const crashData =
  [
  {
    "crash_date": "2014-01-21T00:00:00.000",
    "crash_time": "10:55",
    "number_of_persons_injured": "0",
    "number_of_persons_killed": "0",
    "number_of_pedestrians_injured": "0",
    "number_of_pedestrians_killed": "0",
    "number_of_cyclist_injured": "0",
    "number_of_cyclist_killed": "0",
    "number_of_motorist_injured": "0",
    "number_of_motorist_killed": "0",
    "contributing_factor_vehicle_1": "Fatigued/Drowsy",
    "contributing_factor_vehicle_2": "Unspecified",
    "collision_id": "2983888",
    "vehicle_type_code1": "PASSENGER VEHICLE",
    "vehicle_type_code2": "PASSENGER VEHICLE"
  },
  {
    "crash_date": "2014-01-21T00:00:00.000",
    "crash_time": "9:15",
    "number_of_persons_injured": "0",
    "number_of_persons_killed": "0",
    "number_of_pedestrians_injured": "0",
    "number_of_pedestrians_killed": "0",
    "number_of_cyclist_injured": "0",
    "number_of_cyclist_killed": "0",
    "number_of_motorist_injured": "0",
    "number_of_motorist_killed": "0",
    "contributing_factor_vehicle_1": "Unspecified",
    "contributing_factor_vehicle_2": "Unspecified",
    "collision_id": "3066024",
    "vehicle_type_code1": "PASSENGER VEHICLE",
    "vehicle_type_code2": "PASSENGER VEHICLE"
  },
  {
    "crash_date": "2014-01-21T00:00:00.000",
    "crash_time": "11:18",
    "borough": "BRONX",
    "zip_code": "10468",
    "latitude": "40.8628153",
    "longitude": "-73.9075500",
    "location": {
      "latitude": "40.8628153",
      "longitude": "-73.90755"
    },
    "on_street_name": "LORING PLACE                    ",
    "off_street_name": "WEST FORDHAM ROAD               ",
    "number_of_persons_injured": "1",
    "number_of_persons_killed": "0",
    "number_of_pedestrians_injured": "0",
    "number_of_pedestrians_killed": "0",
    "number_of_cyclist_injured": "0",
    "number_of_cyclist_killed": "0",
    "number_of_motorist_injured": "1",
    "number_of_motorist_killed": "0",
    "contributing_factor_vehicle_1": "Pavement Slippery",
    "contributing_factor_vehicle_2": "Pavement Slippery",
    "contributing_factor_vehicle_3": "Unspecified",
    "collision_id": "113159",
    "vehicle_type_code1": "VAN",
    "vehicle_type_code2": "PASSENGER VEHICLE",
    "vehicle_type_code_3": "PASSENGER VEHICLE"
  },
  {
    "crash_date": "2014-01-21T00:00:00.000",
    "crash_time": "10:30",
    "borough": "QUEENS",
    "zip_code": "11355",
    "latitude": "40.7568402",
    "longitude": "-73.8101242",
    "location": {
      "latitude": "40.7568402",
      "longitude": "-73.8101242"
    },
    "on_street_name": "156 STREET                      ",
    "off_street_name": "45 AVENUE                       ",
    "number_of_persons_injured": "0",
    "number_of_persons_killed": "0",
    "number_of_pedestrians_injured": "0",
    "number_of_pedestrians_killed": "0",
    "number_of_cyclist_injured": "0",
    "number_of_cyclist_killed": "0",
    "number_of_motorist_injured": "0",
    "number_of_motorist_killed": "0",
    "contributing_factor_vehicle_1": "Unspecified",
    "contributing_factor_vehicle_2": "Unspecified",
    "collision_id": "254164",
    "vehicle_type_code1": "PASSENGER VEHICLE",
    "vehicle_type_code2": "PASSENGER VEHICLE"
  },
  {
    "crash_date": "2014-01-21T00:00:00.000",
    "crash_time": "15:30",
    "borough": "BROOKLYN",
    "zip_code": "11220",
    "latitude": "40.6113676",
    "longitude": "-74.0348713",
    "location": {
      "latitude": "40.6113676",
      "longitude": "-74.0348713"
    },
    "on_street_name": "4 AVENUE                        ",
    "off_street_name": "SHORE ROAD                      ",
    "number_of_persons_injured": "0",
    "number_of_persons_killed": "0",
    "number_of_pedestrians_injured": "0",
    "number_of_pedestrians_killed": "0",
    "number_of_cyclist_injured": "0",
    "number_of_cyclist_killed": "0",
    "number_of_motorist_injured": "0",
    "number_of_motorist_killed": "0",
    "contributing_factor_vehicle_1": "Unspecified",
    "contributing_factor_vehicle_2": "Unspecified",
    "collision_id": "144353",
    "vehicle_type_code1": "SPORT UTILITY / STATION WAGON",
    "vehicle_type_code2": "PASSENGER VEHICLE"
  }
]
  const renderItem = ({ item }) => {

    // vehicle_type_code1 as first car and vehicle_type_code2 as second car along with crash_date and crash_time.

    return (

      <TouchableOpacity 
      onPress={()=>navigation.navigate('CardDetails',{item})}
      >
      <View style={{ height: 150, width: '40%', backgroundColor:'grey', marginHorizontal:10,marginVertical:10 }}>
        <Text>
          Vehicle 1 Type: {item.vehicle_type_code1}

        </Text>

        <Text>
          Vehicle 2 Type: {item.vehicle_type_code2}

        </Text>
        <Text>
          Crash Date: {item.crash_date}

        </Text>

        <Text>
          Crash Time: {item.crash_time}

        </Text>



      </View>
      </TouchableOpacity>
    );
  };


  useEffect(() => {
    fetchCarRecords(offset,limit)
  }, []);
  return (


    <SafeAreaView style={backgroundStyle}>


      <FlatList
        data={carCrashData}
        renderItem={renderItem}
        keyExtractor={(item) => item.collision_id}
        // extraData={selectedId}
        onEndReached={() => fetchCarRecords(offset, limit)}
        onEndReachedThreshold={0.1}
      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'transparent'
  }
});

export default Home;
