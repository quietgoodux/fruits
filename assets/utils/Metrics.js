import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Metrics = StyleSheet.create({

  flex: {flex: 1},
  flexWrap: {flexWrap: 'wrap'},
  flexRow: {flexDirection: 'row'},

  justifyContentStart: {justifyContent: 'flex-start'},
  justifyContentCenter: {justifyContent: 'center'},
  justifyContentEnd: {justifyContent: 'flex-end'},
  justifyContentBetween: {justifyContent: 'space-between'},
  justifyContentAround: {justifyContent: 'space-around'},

  alignItemsStart: {alignItems: 'flex-start'},
  alignItemsCenter: {alignItems: 'center'},
  alignItemsEnd: {alignItems: 'flex-end'},
  alignItemsStretch: {alignItems: 'stretch'},

  textCenter: {textAlign: 'center'},
  textJustify: {textAlign: 'justify'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},

});

const space = (name, direction, size) => {
  switch (name) {
    case 'm':
      switch (direction) {
        case 'all':
          return {margin: size * 8};
        case 't':
          return {marginTop: size * 8};
        case 'b':
          return {marginBottom: size * 8};
        case 'l':
          return {marginLeft: size * 8};
        case 'r':
          return {marginRight: size * 8};
        case 'x':
          return {marginHorizontal: size * 8};
        case 'y':
          return {marginVertical: size * 8};
        default:
          return {margin: size * 8};
      }
    case 'p':
      switch (direction) {
        case 'all':
          return {padding: size * 8};
        case 't':
          return {paddingTop: size * 8};
        case 'b':
          return {paddingBottom: size * 8};
        case 'l':
          return {paddingLeft: size * 8};
        case 'r':
          return {paddingRight: size * 8};
        case 'x':
          return {paddingHorizontal: size * 8};
        case 'y':
          return {paddingVertical: size * 8};
        default:
          return {padding: size * 8};
      }
    default:
      throw new Error("Error name, not 'padding' or 'margin' !");
  }
};

const viewMetrics = (direction, size) => {
  switch (direction) {
    case 'height':
      return (height * size) / 100;
    case 'width':
      return (width * size) / 100;
    default:
      return (width * size) / 100;
  }
};

const createStyleSheet = extStyles => {
  const styleSheet = StyleSheet.create(extStyles);
  styleSheet.space = space;
  styleSheet.viewMetrics = viewMetrics;
  return styleSheet;
};

const Style = createStyleSheet(Metrics);
Style.create = createStyleSheet;

export default Metrics;