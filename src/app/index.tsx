import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global-styles";
import ThemeText from "../../components/ThemeText";
import CalculatorButton from "../../components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "../../hooks/useCalculator";

const CalculatorApp = () => {
  const { formula, buildNumber } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/*Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
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
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Boton1 */}
        <CalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => console.log("x")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Boton1 */}
        <CalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Boton1 */}
        <CalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Boton1 */}
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => console.log("0")}
        />
        <CalculatorButton label="." onPress={() => console.log(".")} />

        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
