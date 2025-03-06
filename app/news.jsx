import { View, Text, Image } from 'react-native';

export default function News() {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f4edfa' }}>
            <View style={{ gap: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Text style={{ width: "80%", fontSize: 25, fontWeight: "bold" }}>Buquê de noiva com girassol: saiba o significado e como usar a flor</Text>
                <Text style={{ width: "80%", fontSize:15, textAlign: "justify" }}>O buquê é um dos elementos mais simbólicos do casamento, carregando significados e expressando a personalidade da noiva. Em busca de originalidade e para transmitir alegria e otimismo, muitas mulheres têm optado por um buquê de girassóis, uma flor que irradia luz e energia positiva.</Text>
                <Image
                    source={{ uri: 'https://previews.123rf.com/images/chekman/chekman2310/chekman231000079/215228522-flor-de-girassol-flor-de-girassol-imagem-isolada-desenho-de-girassol-bonito-em-ilustra%C3%A7%C3%A3o-vetorial.jpg' }}
                    style={{ width: '80%', height: 200 }}
                />
                <Text style={{ width: "80%", fontSize:15, textAlign: "justify" }}>“Embora os tons mais suaves e paletas naturais seja tendência, os girassóis se destacam pela sua luminosidade, criando composições encantadoras”, explica Daniela Coke, organizadora de eventos e decoradora da Dani Coke Design Floral (@dcdecoracoes).</Text>
            </View>
        </View>
    );
}
