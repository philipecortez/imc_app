/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {altura: 0, massa: 0, resultado: 0, resultadoText: ''};
    this.calcular = this.calcular.bind(this);
    this.tabelaClassificacao = this.tabelaClassificacao.bind(this);
  }

  calcular() {
    const {massa, altura} = this.state;
    const resultado = (massa / (altura * altura)).toFixed(2);
    this.setState({
      resultado: resultado,
      resultadoText: this.tabelaClassificacao(resultado),
    });
  }

  tabelaClassificacao(resultado) {
    let text = '';

    if (resultado < 18.5) {
      text = 'Abaixo do peso =/';
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      text = 'Peso normal ;)';
    } else if (resultado >= 25 && resultado <= 29.9) {
      text = 'Sobrepeso!';
    } else if (resultado >= 30 && resultado <= 34.9) {
      text = 'Obesidade Grau 1!';
    } else if (resultado >= 35 && resultado <= 39.9) {
      text = 'Obesidade Grau 2!';
    } else {
      text = 'Obesidade Grau 3!';
    }

    return text;
  }

  render() {
    return (
      <>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Altura"
              keyboardType="numeric"
              value={this.state.altura}
              onChangeText={value => this.setState({altura: value})}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Massa"
              keyboardType="numeric"
              value={this.state.massa}
              onChangeText={value => this.setState({massa: value})}
            />
            <TouchableOpacity style={styles.button} onPress={this.calcular}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.resultText}>{this.state.resultado}</Text>
          <Text style={styles.resultText}>{this.state.resultadoText}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 100,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    fontSize: 42,
  },
  button: {
    marginTop: 70,
    backgroundColor: '#0084FF',
    padding: 15,
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputs: {
    fontSize: 42,
    width: '50%',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 42,
    textAlign: 'center',
    color: 'gray',
  },
});

export default App;
