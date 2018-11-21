import React from 'react'
import { Animated } from 'react-native'

export default class FadeInFadeOut extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            anim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.anim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 1000           // Make it take a while
            }
        ).start();   
    }

    componentWillUnmount() {
        Animated.timing(                  // Animate over time
            this.state.anim,            // The animated value to drive
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration: 1000           // Make it take a while
            }
        ).start();   
    }

    render() {
        let { anim } = this.state;

        return (
          <Animated.View                 // Special animatable View
            style={{
              ...this.props.style,
              opacity: anim,         // Bind opacity to animated value
            }}
          >
            {this.props.children}
          </Animated.View>
        );
    }
}