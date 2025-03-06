import { View, Text, Image } from 'react-native';

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4edfa' }}>
            <View style={{ gap: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/921/921053.png' }}
                    style={{ width: 150, height: 150}}
                />
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Nome do Usuário</Text>
                <View style={{ gap: 5, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 10 }}> 
                <Text style={{ fontWeight: "600"}}>Email: mariduda@divasdeDS.com</Text>
                <Text style={{ fontWeight: "600"}}>Telefone: (19) 997500462</Text>
                </View>
            </View>
        </View>
            );
}