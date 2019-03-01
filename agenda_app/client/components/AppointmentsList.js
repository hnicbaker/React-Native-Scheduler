import React from 'react';

export default class Calendar extends React.Component {
  
    render() {
      return (
        <View>
          <ScrollView >
           
          <View style={styles.container}>
      <CalendarStrip
        style={{height:150, paddingTop: 20, paddingBottom: 10}}
      />
    </View>
  
          </ScrollView>
  </View>
      );
    }
    }
  
    const styles = StyleSheet.create({
      container: { flex: 1 }
    });