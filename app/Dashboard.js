import { View, Text } from 'react-native'
import React from 'react'
import WeeklyCalendar from 'react-native-weekly-calendar';

export const Dashboard = () => {
  const sampleEvents = [
    { 'start': '2022-10-30 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
    { 'start': '2022-10-31 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
    { 'start': '2022-11-01 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
    { 'start': '2022-11-01 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
    { 'start': '2022-11-02 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
    { 'start': '2022-11-02 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
    { 'start': '2022-11-03 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
    { 'start': '2022-11-03 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
    { 'start': '2022-11-04 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
    { 'start': '2022-11-04 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' },
    { 'start': '2022-11-05 22:00:00', 'duration': '01:00:00', 'note': 'Hello World' },
  ]

  return (
    <View>
      <WeeklyCalendar events={sampleEvents} style={{ height: "100%" }} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
// export default Dashboard;