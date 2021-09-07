import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




export const CardDetails = ({navigation,route}) => {
    const backgroundStyle = {
        backgroundColor: 'transparent',
      };

    let crashCarDetail = route.params.item
    

    return (
      <SafeAreaView style={{flex:1}}>

    

      <View style={{ flex: 1, flexDirection: 'column'}}>
      

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40 ,  borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> Date</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.crash_date}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> Time</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.crash_time}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> Street Name</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.on_street_name}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40 , borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of Person injured</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_persons_injured}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40 , borderWidth:1, marginHorizontal:10}}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of Person Killed</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_persons_killed}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of Pedestrians injured</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_pedestrians_injured}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of Pedestrians killed</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_pedestrians_killed}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of Cyclist injured</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_cyclist_injured}</Text>

        </View>


        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of Cyclist killed</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_cyclist_killed}</Text>

        </View>



        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of  motorist injured</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_motorist_injured}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> No of  motorist killed</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.number_of_motorist_killed}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> Contributing Factor from vehicle 1</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.contributing_factor_vehicle_1}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> Contributing Factor from vehicle 2</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.contributing_factor_vehicle_2}</Text>

        </View>



        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}>  Collision Id</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.collision_id}</Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}>  Vehicle 1 Type </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.vehicle_type_code1}</Text>

        </View>


        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 40, borderWidth:1, marginHorizontal:10 }}>

          <View style={{ flex: 1 }}>
            <Text style={{marginHorizontal:20}}> Vehicle 2 Type</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start',  }}></View>
          <Text style={{marginHorizontal:20}}> {crashCarDetail.vehicle_type_code2}</Text>

        </View>

      </View>


    </SafeAreaView>
      );




}