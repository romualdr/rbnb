import React from 'react'
import { TextInput, Keyboard, DatePickerAndroid, StyleSheet } from 'react-native'

const DateInput = props => {
    const { input, ...inputProps } = props;
    return <TextInput
                placeholder={inputProps.placeholder}
                onFocus={() => {
                    Keyboard.dismiss();
                    DatePickerAndroid.open({
                        date: props.input.value instanceof Date ? props.input.value : new Date()
                    }).then( ({ action, year, month, day}) => {
                        if (action !== DatePickerAndroid.dismissedAction) {
                            input.onChange( new Date( year, month, day ) );
                        }
                    });
                }}
                style={styles.input}
                {...inputProps}
                value={props.input.value && props.input.value.toLocaleDateString('fr-FR')}
            />
}

const styles = StyleSheet.create({
    input: {}
}) 

export default DateInput