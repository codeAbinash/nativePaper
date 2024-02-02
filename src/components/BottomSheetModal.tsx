import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Modal, PanResponder, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

const BottomSheet = ({
  visible,
  children,
  onDismiss,
  closeFn,
}: {
  visible: boolean
  children: React.ReactNode
  onDismiss: () => void
  closeFn?: () => void
}) => {
  const theme = useTheme()
  const screenHeight = Dimensions.get('screen').height
  const panY = useRef(new Animated.Value(screenHeight)).current
  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
  })
  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: false,
  })

  function dismissFunc() {
    onDismiss()
    if (closeFn) {
      closeFn()
    }
  }

  const panResponders = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: Animated.event([null, { dy: panY }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gs) => {
      if (gs.dy > 0 && gs.vy > 2) {
        return closeAnim.start(dismissFunc)
      }
      return resetPositionAnim.start()
    },
  })

  useEffect(() => {
    if (visible) {
      resetPositionAnim.start()
    } else {
      closeAnim.start(dismissFunc)
    }
  }, [visible])

  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  })

  const backgroundColor = panY.interpolate({
    inputRange: [0, screenHeight],
    outputRange: ['rgba(0,0,0,0.25)', 'rgba(0,0,0,0)'],
  })

  return (
    <Modal animated animationType='fade' visible={visible} transparent onRequestClose={dismissFunc} hardwareAccelerated statusBarTranslucent>
      <Animated.View style={[styles.overlay, { backgroundColor }]}>
        <Animated.View style={[styles.container, { top, backgroundColor: 'transparent' }]} {...panResponders.panHandlers}>
          {children}
        </Animated.View>
      </Animated.View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    height: 'auto',
  },
})

export default BottomSheet
