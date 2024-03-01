import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, ScrollViewProps } from 'react-native'

interface KeyboardAvoidingContainerProps extends ScrollViewProps {}

export default function KeyboardAvoidingContainer(props: KeyboardAvoidingContainerProps) {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} {...props}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
    // </SafeAreaView>
  )
}
