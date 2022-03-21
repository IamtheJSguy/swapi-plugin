import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import AppText from './AppText';
import CustomLoader from '../components/CustomLoader';

function Planets(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const baseUrl = 'https://swapi.dev/api/planets/';

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}`);
      const json = await response.json();
      setData(json.results);
      console.log('Fetched' + JSON.stringify(json.results, null, 2));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = data.filter(
    item =>
      item.name
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.rotation_period
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.orbital_period
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.diameter
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.climate
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.gravity
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.terrain
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.surface_water
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.population
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.created
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.edited
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')) ||
      item.url
        .toLowerCase()
        .replace(/ /g, '')
        .includes(props.searchString.toLowerCase().replace(/ /g, '')),
  );

  return (
    <View>
      <ScrollView>
        {isLoading && <CustomLoader visible={isLoading} />}
        {data &&
          filterData.map((data, i) => (
            <View style={styles.cardView}>
              {Object.entries(data).map(([key, value]) => (
                <View>
                  {value instanceof Array ? (
                    data[key].map(item => (
                      <View style={styles.cardViewRow}>
                        <AppText
                          textStyle={styles.valText}
                          children={key + ':'}
                        />
                        <AppText textStyle={styles.valText} children={item} />
                      </View>
                    ))
                  ) : (
                    <View style={styles.cardViewRow}>
                      <AppText
                        textStyle={styles.valText}
                        children={key + ':'}
                      />
                      <AppText textStyle={styles.valText} children={value} />
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    marginHorizontal: 10,
    margin: 5,
    padding: 5,
  },
  cardViewRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    margin: 5,
  },
  cardViewRow2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardViewCol: {
    flexDirection: 'column',
  },
  valText: {
    fontSize: 14,
  },
});

export default Planets;
