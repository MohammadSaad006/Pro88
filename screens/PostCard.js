import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          light_theme: true,
      fontsLoaded: false,
        };
    }

    componentDidMount() { }

    render() {
        return (
           <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('PostScreen', {
            post: this.props.post,
          })
        }>
      <View style={styles.container}>
    <View style={
              this.state.light_theme
                ? styles.cardContainerLight
                : styles.cardContainer
            }
          >
 <View style={styles.authorContainer}>
<View style={styles.authorImageContainer}>
<Image source={require("../assets/profile_img.png")}style={styles.profileImage}>
</Image>
   </View>
     <View style={styles.authorNameContainer}>
      <Text sstyle={
                  this.state.light_theme
                    ? styles.titleTextLight
                    : styles.titleText
                }
              >{this.props.post.author}</Text>
     </View>
     </View>
   <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
      <View style={styles.captionContainer}>
      <Text style={
                  this.state.light_theme
                    ? styles.textLight
                    : styles.text
                }
              >
       {this.props.post.caption}
       </Text>
   </View>
         <View style={styles.actionContainer}>
       <View style={styles.likeButton}>
     <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
 <Text style={
                    this.state.light_theme
                      ? styles.likeTextLight
                      : styles.likeText
                  }
                >12k</Text>
     </View>
       </View>
   </View>
     </View>
     </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2a2a2a",
        borderRadius: RFValue(20),
        padding: RFValue(20)
    },
    authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    authorNameContainer: {
        flex: 0.85,
        justifyContent: "center"
    },
    postImage: {
        marginTop: RFValue(20),
        resizeMode: "contain",
        width: "100%",
        alignSelf: "center",
        height: RFValue(275)
    },
    captionContainer: {},
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  likeTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
   titleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white"
  },
  titleTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "black"
  },
  text: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  },
  textLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black"
  },
});