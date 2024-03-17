// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function BottomTabNavigator() {
//   const BottomTab = createBottomTabNavigator<BottomTabParamList>();

//   return (
//     <BottomTab.Navigator
//       initialRouteName={'Home'}
//       screenOptions={{
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           backgroundColor: theme.colors.bgDefault,
//           borderTopColor: theme.colors.bgMuted,
//         },
//       }}>
//       <BottomTab.Screen
//         name={'News'}
//         component={NewsNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <HomeIconSvg
//               color={focused ? theme.colors.icSelect : theme.colors.icUnselect}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name={'Search'}
//         component={SearchNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <SearchIconSvg
//               color={focused ? theme.colors.icSelect : theme.colors.icUnselect}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name={'Portfolio'}
//         component={PortfolioNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <PortfolioIconSvg
//               color={focused ? theme.colors.icSelect : theme.colors.icUnselect}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name={'User'}
//         component={UserNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <MyIconSvg
//               color={focused ? theme.colors.icSelect : theme.colors.icUnselect}
//             />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }
// export default BottomTabNavigator;
