import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { theme } from './src/styles/theme'

import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { useCallback, useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen';
import Widget from './src/components/Widget'

export default function App() {
	const [fontsLoaded] = useFonts({
		regular: Inter_400Regular,
		medium: Inter_500Medium,
	})

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync()
		}
		prepare()
	}, [])

	const onLayoutRootView = useCallback(() => {
		if (fontsLoaded)
			SplashScreen.hideAsync()
	}, [fontsLoaded])

	if (!fontsLoaded)
		return null

	return (
		<View
			onLayout={ onLayoutRootView }
			style={{
				flex: 1,
				backgroundColor: theme.colors.background,
			}}
		>
			<Widget />

			<StatusBar
				style="auto"
				backgroundColor={ theme.colors.surface_primary }
				translucent
			/>
		</View>
	)
}
