import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View,
} from 'react-native';
import { colors } from '../utils';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    paddingBottom: 5,
    marginBottom: 5,
    // alignItems: 'center',
    borderBottomColor: colors.GRAY,
    borderBottomWidth: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    // padding: 15,
  },
  fieldWrapper: {
    flex: 1,
    margin: 10,
  },
  fieldLabel: {
    fontSize: 10,
  },
  fieldContent: {
    fontSize: 12,
  },
});

class AssetTxItem extends React.Component {
  /**
   * Press event handler
   */
  onPress = () => {
    this.props.onPressItem(this.props.transaction);
  };

  /**
   * Long press event handler
   */
  onLongPress = () => {
    console.log('Long press');
  };

  render() {
    const { transaction } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onPress}
        onLongPress={this.onLongPress}
      >
        <View style={styles.contentContainer}>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldLabel}>Amount</Text>
            <Text style={styles.fieldContent}>{transaction.amount.toFixed(8)}</Text>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldLabel}>Price</Text>
            <Text style={styles.fieldContent}>{`$ ${transaction.price.toFixed(2)}`}</Text>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldLabel}>Cost</Text>
            <Text style={styles.fieldContent}>
              {`$ ${(
                transaction.price * transaction.amount
              ).toFixed(2)}`}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldLabel}>Notes</Text>
            <Text style={styles.fieldContent}>{transaction.notes || ''}</Text>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldLabel}>Date</Text>
            <Text style={styles.fieldContent}>{transaction.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default AssetTxItem;
