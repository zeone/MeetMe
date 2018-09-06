import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import Button from '../common/Button';
import ImageViewer from '@dwqs/react-native-image-viewer';


const imagesThumbsArray = [
        require('../../assets/profile-as-user-screen/gallery-1.jpg'),
        require('../../assets/profile-as-user-screen/gallery-2.jpg'),
        require('../../assets/profile-as-user-screen/gallery-3.jpg'),
        require('../../assets/profile-as-user-screen/gallery-4.png')
];

const imagesArray = [
    '../../assets/profile-as-user-screen/gallery-1.jpg',
    '../../assets/profile-as-user-screen/gallery-2.jpg',
    '../../assets/profile-as-user-screen/gallery-3.jpg',
    '../../assets/profile-as-user-screen/gallery-4.png'
];

class ProfileGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shown: false,
            curIndex: 0
        }

        this.openViewer = this.openViewer.bind(this);
        this.closeViewer = this.closeViewer.bind(this);
        this.renderGalleryThumbs = this.renderGalleryThumbs.bind(this);
    }

    openViewer(index){
        this.setState({
            shown: true,
            curIndex: index
        })
    }

    closeViewer(){
        this.setState({
            shown: false,
            curIndex: 0
        })
    }

    renderGalleryThumbs() {
        return imagesThumbsArray.map((image, i) => {
            return (
                <Button key={i} style={styles.buttonStyle} onPress={() => {this.openViewer(i)}}>
                    <Image style={styles.imageStyle} source={image} />
                </Button>
            );
        });
    }

    render() {
        const {shown, curIndex} = this.state;

        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Галерея</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.galleryContainerStyle} horizontal={true}>
                    {this.renderGalleryThumbs()}
                </ScrollView>
                <ImageViewer shown={shown} onClose={this.closeViewer} imageUrls={imagesArray} index={curIndex}/>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    textStyle: {
        fontSize: 14,
        color: '#000',
        marginBottom: 20,
        fontFamily: 'Roboto',
        paddingRight: 20,
        paddingLeft: 20
    },
    galleryContainerStyle: {
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    buttonStyle: {
        width: 75,
        height: 60,
        borderRadius: 10,
        marginRight: 20,
        overflow: 'hidden'
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
};

export default ProfileGallery;