// Tela de calculadora no app mobile (React Native)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { calcularFiltracao } from '../../../packages/core/calculos/filtracao';
import { catalogo } from '../../../packages/catalog';

export default function CalculadoraScreen() {
  const [produtoId, setProdutoId] = useState('');
  const [d10, setD10] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    const produto = catalogo.find(p => p.id === produtoId);
    if (!produto) {
      alert('Produto não encontrado');
      return;
    }
    const dados = {
      d10: parseFloat(d10),
      d15: 0.2, // valores fictícios para exemplo
      d50: 0.5,
      d60: 0.6,
      d85: 0.8,
      coesivo: false,
      confinado: true,
      fluxo: 'permanente',
      gradiente: 1.0,
      critico: false,
      geotexteis: produto.propriedades.hidraulicas
    };
    const res = calcularFiltracao(dados);
    setResultado(res);
  };

  return (
    <ScrollView>
      <Text>ID do Produto:</Text>
      <TextInput value={produtoId} onChangeText={setProdutoId} />
      <Text>D10 (mm):</Text>
      <TextInput value={d10} onChangeText={setD10} keyboardType="numeric" />
      <Button title="Calcular" onPress={handleCalcular} />
      {resultado && (
        <View>
          <Text>Retenção: {resultado.retencao.ok ? 'OK' : 'Falha'}</Text>
          <Text>Anti-colsão: {resultado.anticolmatacao.ok ? 'OK' : 'Falha'}</Text>
          <Text>Permeabilidade: {resultado.permeabilidade.ok ? 'OK' : 'Falha'}</Text>
          <Text>Durabilidade: {resultado.durabilidade.ok ? 'OK' : 'Falha'}</Text>
          <Text>Aprovado em {resultado.resumo.aprovados} de {resultado.resumo.total}</Text>
        </View>
      )}
    </ScrollView>
  );
}
