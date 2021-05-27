import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const TabHeader = props => {
  const {state, descriptors, navigation, position, search, onTabChange} = props;
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.btnContainer}>
            <Text style={isFocused ? styles.titleActive : styles.title}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabHeader;

const commonStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'grey',
  },
});

const styles = StyleSheet.create({
  title: commonStyles.title,
  titleActive: {
    ...commonStyles.title,
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  btnContainer: {
    height: 60,
    borderBottomWidth: 1,
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
  },
});
