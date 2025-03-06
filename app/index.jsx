import {View, Text, Image} from 'react-native';

export default function Home (){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4edfa'}}>
            <Text style={{fontSize: 30, color: "#9102f0", fontWeight: "bold" }}>Bem-vindo ao App!</Text>
        </View>
    );
}
