/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  // let htmlContent = '<h1>hello world</h1>';
  const htmlContent = (<h1>Hello, world!</h1>).toString();
  return (
    <>
      {/*<WebView*/}
      {/*    source={{ uri: 'https://infinite.red' }}*/}
      {/*    style={{ marginTop: 20 }}*/}
      {/*/>*/}

      {/*<WebView originWhitelist={['*']} source={{html: {htmlContent}}} />*/}
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>hello worlhello worlhello worlhello worlhello worlhello worlhello worlhello world</h1>'}}
      />
      <WebView
        originWhitelist={['*']}
        source={{html: '<button>hello world</button>'}}
      />
      <WebView
        originWhitelist={['*']}
        source={{uri: './assets/index.html'}}
        style={{marginTop: 20}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
