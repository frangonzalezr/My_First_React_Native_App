import React, {Component} from 'react'
import {TouchableOpacity, Image, Dimensions} from 'react-native'
import PropType from 'prop-types'

class HouseCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    Image.getSize(this.props.house.image_dir, (width, height) => {
      const {width: totalWidth} = Dimensions.get('window')
      const cardWidth = totalWidth / 2
      const cardHeight = (cardWidth * height) / width
      this.setState({width: cardWidth, height: cardHeight})
    })
  }

  _avisarAPapa = () => {
    this.props.onPress(this.props.house)
  }

  render() {
    const {house, onPress} = this.props
    const {width, height} = this.state
    return (
      <TouchableOpacity
        onPress={this._avisarAPapa}
        // onPress={() => onPress(house)} // Forma 1: Pro
      >
        <Image
          resizeMode={'cover'}
          source={{uri: house.image_dir}}
          style={{width: width, height: height}}
        />
      </TouchableOpacity>
    )
  }
}

HouseCard.defaultProps = {
  onPress: () => {}
}

HouseCard.propTypes = {
  house: PropType.object.isRequired,
  onPress: PropType.func
}

export default HouseCard
