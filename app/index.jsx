import { View, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title="View Restaurants"
        onPress={() => router.push('/restaurants')}
      />
    </View>
  )
}
