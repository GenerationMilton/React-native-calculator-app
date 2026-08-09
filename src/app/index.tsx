import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global-styles";
import ThemeText from "../../components/ThemeText";
import CalculatorButton from "../../components/CalculatorButton";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/*Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 500</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>

      {/*Filas de botones */}

      <View style={globalStyles.row}>
        {/* Boton1 */}
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton label="÷" onPress={() => console.log("÷")} />
      </View>
    </View>
  );
};

export default CalculatorApp;
