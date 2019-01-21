/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList, ActivityIndicator, } from 'react-native';

import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './actions';

class CounterApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            heroesList: [],
        }
    }

    getHerosFromApiAsync = async () => {

        await fetch('https://simplifiedcoding.net/demos/view-flipper/heroes.php', {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {

                this.setState({ isLoading: false })
                this.setState({ heroesList: responseJson.heroes })
                //console.error(responseJson);
                //return responseJson.heroes;
                this.props.storeHeroesList(responseJson.heroes)

            })
            .catch((error) => {
                console.error(error);
            });
    }


    componentDidMount() {

        this.getHerosFromApiAsync();

    }

    // storeHeroesList = (hList) => {

    //     //console.warn(hList)
    //     this.props.dispatch({ type: 'STORE_HEROES', hList })

    // }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    < ActivityIndicator size="large" color='gray' />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>CounterApp 1</Text>
                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={this.state.heroesList}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    keyExtractor={(index) => index.toString()}
                />

                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Home2')}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counterReducer.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
        storeHeroesList: (hList) => dispatch("STORE_HEROES", hList),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
