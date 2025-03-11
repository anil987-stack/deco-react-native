import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ReduxNetworkProvider } from 'react-native-offline'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import Loading from 'App/Components/Loading';

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNetworkProvider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <RootScreen />
          </PersistGate>
        </ReduxNetworkProvider>
      </Provider>
    )
  }
}
