import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.containerItem}>
            <TouchableOpacity
            style={{ ...styles.item, backgroundColor: item.color}}
                onPress={() => onSelected(item)}
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem;
