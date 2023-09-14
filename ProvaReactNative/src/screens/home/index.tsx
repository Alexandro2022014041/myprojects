import { Text, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { InputBox } from "../../components/inputBox"
import { Buttons } from "../../components/buttons"
import { ViewBox } from "../../components/viewBox"
import { InputBoxTotal } from "../../components/viewBoxTotal"

export const Home = () =>{

    const [man, setMan] = useState(0)
    const [woman, setWoman] = useState(0)
    const [child, setChild] = useState(0)
    const [participants, setparticipants] = useState(0)
    const [totalFood, setTotalFood] = useState(0)
    const [totalDrinks, setTotalDrinks] = useState(0)
    const [meat, setMeat] = useState(0)
    const [appetizer, setAppetizer] = useState(0)
    const [alcoholDrink, setalcoholDrink] = useState(0)
    const [water, setWater] = useState(0)
    const [cola, setCola] = useState(0)

    const MeatCalc = () => {
        setMeat(prevMeat => 400 * man)
        setMeat(prevMeat => (300 * woman) + prevMeat)
        setMeat(prevMeat => (200 * child) + prevMeat)
    }

    const DrinkCalc = () => {
        setalcoholDrink(prevAlcoholDrink => 4 * man)
        setalcoholDrink(prevAlcoholDrink => (2 * woman) + prevAlcoholDrink)
        
        setWater(prevWater => 2 * woman)
        setWater(prevWater => (2 * child) + prevWater)

        setCola(prevCola => 1.5 * woman)
        setCola(prevCola => (1.5 * child) + prevCola)
    }

    const AppetizerCalc = () =>{
        setAppetizer(prevAppetizer => 150 * man)
        setAppetizer(prevAppetizer => (100 * woman) + prevAppetizer)
        setAppetizer(prevAppetizer => (50 * child) + prevAppetizer)
    }

    const ResultParticipants = () =>{
        var valueMan: number = man
        var valueWoman: number = woman
        var ValueChild: number = child
        setparticipants(Number(valueMan) + Number(valueWoman) + Number(ValueChild))
    }

    const ExtraItens = (value: number, isDrinks: boolean) =>{
        var calc = 0
        if(isDrinks){
            calc = ((value * 10) / 100) * 1000
        }else{
            calc = ((value * 10) / 100)
        }

        return calc
    }

    const TotalFood = () =>{
        var valueMeat: number = meat
        var valueappetizer: number = appetizer
        setTotalFood(Number(valueMeat) + Number(valueappetizer))
        console.log(totalFood)
    }

    const TotalDrinks = () =>{
        var valueAlcoholDrink: number = alcoholDrink
        var valueWater: number = water
        var ValueCola: number = cola
        setTotalDrinks(Number(valueAlcoholDrink) + Number(valueWater) + Number(ValueCola))
        console.log(totalDrinks)
    }

    const Calculator = () =>{
        ResultParticipants()
        MeatCalc()
        DrinkCalc()
        AppetizerCalc()
        TotalFood()
        TotalDrinks()
    }

    const ClearSets = () =>{
        setMan(0)
        setWoman(0)
        setChild(0)
        setMeat(0)
        setalcoholDrink(0)
        setWater(0)
        setCola(0)
        setAppetizer(0)
        setTotalDrinks(0)
        setTotalFood(0)
        setparticipants(0)
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBox}>
                <Text style={styles.textChurraSul}>ChurraSul</Text>
            </View>            
            <View>
                <View style={styles.inputsBox}>
                    <View style={styles.inputsBox1}>
                        <InputBox textTittle={'Homens'} onHandleChange={setMan} textValue={man}/>
                        <InputBox textTittle={'Mulheres'} onHandleChange={setWoman} textValue={woman}/>
                    </View>
                    <View style={styles.inputsBox2}>
                        <InputBox textTittle={'Crianças'} onHandleChange={setChild} textValue={child}/>
                        <Buttons styleButton={styles.buttonBoxCalculator} onHandleChange={Calculator} tittleButton={'Calcular'}/>
                    </View>
                </View>
                <View style={styles.textResultTittleBox}>
                    <Text style={styles.textResultTittle}>Resultado</Text>
                </View>
                <View style={styles.midBox}>
                    <View style={styles.textResultBox}>
                        <Text style={styles.textResult}>Realizamos o calculo para {participants} participantes</Text>
                    </View>
                </View>
                <View style={styles.resultTotalBox}>
                <Text style={styles.resultTotalittlesBox}>Comida</Text>
                    <View style={styles.resultTotalMeatAppetizerBox}>
                        <ViewBox textGrams={meat + 'g'} textExtra={ExtraItens(meat, false) + 'g Extra'} textObject={'Carne'} style={styles.viewMeatAppetizerBox}/>
                        <ViewBox textGrams={appetizer + 'g'} textExtra={ExtraItens(appetizer, false) + 'g Extra'} textObject={'Aperitivos'} style={styles.viewMeatAppetizerBox}/>
                        <InputBoxTotal textTotal={totalFood} style={styles.viewMeatAppetizerBoxTotal}/>
                    </View>
                    <View>
                        <View style={styles.resultTotalMeatAppetizerBox}>
                            <ViewBox textGrams={alcoholDrink + 'L'} textExtra={ExtraItens(alcoholDrink, true) + 'ml Extra'} textObject={'Cerveja'} style={styles.viewDrinksBox}/>
                            <ViewBox textGrams={water + 'L'} textExtra={ExtraItens(water, true) + 'ml Extra'} textObject={'Água'} style={styles.viewDrinksBox}/>
                            <ViewBox textGrams={cola + 'L'} textExtra={ExtraItens(cola, true) + 'ml Extra'} textObject={'Refrigerante'} style={styles.viewDrinksBox}/>                                    
                        </View>
                        <View style={styles.viewDrinksBoxTotal}>
                            <InputBoxTotal textTotal={totalDrinks} style={styles.viewDrinksBoxTotalStyle}/>
                        </View>
                    </View>
                </View>                
            </View>
            <View style={styles.boxClear}>
                <Buttons styleButton={styles.buttonBoxClear} onHandleChange={ClearSets} tittleButton={'Limpar'}/>
            </View>
        </View>
    )
}