import React, { Component } from 'react';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { Alert, Animated } from 'react-native';

class CreateEventActionButton extends Component {
    constructor(props) {
        super(props);

        const isScrollViewGoesDown = props.direction === 'down';
        this.animatedRight = isScrollViewGoesDown ? new Animated.Value(0) : new Animated.Value(1);

        this.showActionBtn = this.showActionBtn.bind(this);
        this.hideActionBtn = this.hideActionBtn.bind(this);
    }

    componentDidUpdate() {
        const isScrollViewGoesDown = this.props.direction === 'down';
        isScrollViewGoesDown ? this.hideActionBtn() : this.showActionBtn();
    }

    onButtonPress = () => {
        this.props.navigation.navigate('CreateEvent');
    }

    showActionBtn() {
        Animated.timing(
            this.animatedRight, {
                toValue: 1,
                duration: 500
            }
        ).start();
    }

    hideActionBtn() {
        Animated.timing(
            this.animatedRight, {
                toValue: 0,
                duration: 500
            }
        ).start();
    }

    render() {
        const move = this.animatedRight.interpolate({
            inputRange: [0, 1],
            outputRange: [-66, 10]
        });
        const animatedStyle = {
            right: move
        };

        return (
            <Animated.View style={[styles.containerStyle, animatedStyle]}>
                <Button style={styles.buttonStyle} onPress={this.onButtonPress}>
                    <Icon name="CreateEventActionBtnIcon" width="14" height="14" fill="#fff"/>
                </Button>
            </Animated.View>
        );
    }
}

const styles = {
    containerStyle: {
        width: 56,
        height: 56,
        position: 'absolute',
        bottom: 20
    },
    buttonStyle: {
        width: 56,
        height: 56,
        backgroundColor: '#9216CD',
        shadowColor: '#000',
        shadowOffset: { width: 8, height: 8 },
        elevation: 8,
        zIndex: 2,
        shadowOpacity: 0.24,
        padding: 21,
        borderRadius: 56 / 2
    }
}

export default CreateEventActionButton;