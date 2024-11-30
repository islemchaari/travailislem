import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';

const Page2 = ({ navigation }) => {
  const [hasMultipleCancer, setHasMultipleCancer] = useState(false);
  const [hasMultipleRareDisease, setHasMultipleRareDisease] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'white',
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* Header Section */}
      <View
        style={{
          width: '100%',
          height: 47,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      ></View>

      {/* Title Section */}
      <View style={{ alignItems: 'center', marginVertical: 16 }}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            color: '#4E5D78',
          }}
        >
          Pro
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            color: '#FFB400',
          }}
        >
          file
        </Text>
      </View>

      {/* Description Section */}
      <Text
        style={{
          width: 309.96,
          textAlign: 'center',
          color: '#090A0A',
          fontSize: 20,
          fontFamily: 'Montserrat',
          fontWeight: '500',
          lineHeight: 26,
          marginVertical: 16,
        }}
      >
        You are free to tell us if you have more than one disease
      </Text>

      {/* Form Section */}
      <View
        style={{
          width: 327,
          flexDirection: 'column',
          gap: 20,
          marginTop: 20,
        }}
      >
        {/* Primary Cancer Section */}
        <View>
          <Text
            style={{
              color: '#4E5D78',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontWeight: '500',
            }}
          >
            Primary cancer (multi-choice possible)
          </Text>
          <View
            style={{
              marginTop: 10,
              borderColor: 'rgba(78, 93, 120, 0.2)',
              borderWidth: 1,
              borderRadius: 6,
              padding: 10,
            }}
          >
            <Text>No cancer</Text>
          </View>
          <Text
            style={{
              marginTop: 10,
              color: '#4E5D78',
              fontSize: 12,
              fontFamily: 'Roboto',
              fontWeight: '400',
            }}
          >
            Sometimes there is a cancer of unknown primary (CUP). This means
            that a doctor may have found a secondary cancer without knowing
            where the first cancer originated from. In this case just choose
            CUP.
          </Text>
        </View>

        {/* Metastasis Section */}
        <View>
          <Text
            style={{
              color: '#4E5D78',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontWeight: '500',
            }}
          >
            Metastasis cancer (multi-choice possible)
          </Text>
          <View
            style={{
              marginTop: 10,
              borderColor: 'rgba(78, 93, 120, 0.2)',
              borderWidth: 1,
              borderRadius: 6,
              padding: 10,
            }}
          >
            <Text>No metastasis</Text>
          </View>
          <Text
            style={{
              marginTop: 10,
              color: '#4E5D78',
              fontSize: 12,
              fontFamily: 'Roboto',
              fontWeight: '400',
            }}
          >
            A metastasis cancer happens when cancer cells separate from the
            primary tumour and spread to other parts of the body. You can have
            more than one metastasis.
          </Text>
        </View>

        {/* Rare Disease Section */}
        <View>
          <Text
            style={{
              color: '#4E5D78',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontWeight: '500',
            }}
          >
            Rare disease (multi-choice possible)
          </Text>
          <View
            style={{
              marginTop: 10,
              borderColor: 'rgba(78, 93, 120, 0.2)',
              borderWidth: 1,
              borderRadius: 6,
              padding: 10,
            }}
          >
            <Text>No rare disease</Text>
          </View>
        </View>

        {/* Multiple Cancers Option */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            value={hasMultipleCancer}
            onValueChange={setHasMultipleCancer}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 14, color: '#4E5D78' }}>
            I have more than one cancer
          </Text>
        </View>

        {/* Multiple Rare Diseases Option */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            value={hasMultipleRareDisease}
            onValueChange={setHasMultipleRareDisease}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 14, color: '#4E5D78' }}>
            I have more than one rare disease
          </Text>
        </View>
      </View>

      {/* Footer */}
      <TouchableOpacity
        style={{
          marginTop: 32,
          paddingVertical: 16,
          paddingHorizontal: 32,
          backgroundColor: '#377DFF',
          borderRadius: 48,
          color: 'white',
          fontSize: 24,
          fontWeight: '800',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('NoDisease')} // Navigue vers NoDisease
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '800' }}>
          Next - Go to step 4
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Page2;
