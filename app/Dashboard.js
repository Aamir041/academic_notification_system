import { View, Text } from 'react-native'
import React from 'react'
import WeeklyCalendar from 'react-native-weekly-calendar';

export const Dashboard = () => {
  const sampleEvents = [
    { 'start': '2022-10-30 09:00:00', 'duration': '00:20:00', 'note': 'Mobile Communication Assignment Submission' },
    { 'start': '2022-10-31 14:00:00', 'duration': '01:00:00', 'note': 'Apple Ideathon' },
    { 'start': '2022-11-01 08:00:00', 'duration': '00:30:00', 'note': 'GDSC App Development Bootcamp' },
    { 'start': '2022-11-01 14:00:00', 'duration': '02:00:00', 'note': 'Session On Startup' },
    { 'start': '2022-11-02 19:00:00', 'duration': '01:00:00', 'note': 'Human Library Event' },
    { 'start': '2022-11-02 03:03:00', 'duration': '01:00:00', 'note': 'Mini Project Presentation' },
    { 'start': '2022-11-03 11:00:00', 'duration': '02:00:00', 'note': 'TOC Urgent Tutorial' },
    { 'start': '2022-11-03 15:00:00', 'duration': '01:30:00', 'note': 'Talk On Auyrveda' },
    { 'start': '2022-11-04 18:00:00', 'duration': '02:00:00', 'note': 'SAD Presentation' },
    { 'start': '2022-11-05 22:00:00', 'duration': '01:00:00', 'note': 'IGNITE Debate Competition' },
  ]

  return (
    <View>
      <WeeklyCalendar events={sampleEvents} style={{ height: "100%" }} />
    </View>
  );
}
