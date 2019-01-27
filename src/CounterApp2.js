/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';

import { connect } from 'react-redux';

class CounterApp2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //isLoading: true,
            counter: 0,
            heroesList: [],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>CounterApp 2</Text>
                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>{this.props.colors.color1}</Text>
                    <Text>{this.props.colors.color2}</Text>
                </View>

                <FlatList
                    data={this.props.heroesList}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    keyExtractor={(index) => index.toString()}
                />

                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counterReducer.counter,
        heroesList: state.storeHeroesListReducer.heroesList,
        colors: state.colorsReducer.colors,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp2);

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
