import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = width / 100;
const heightPer = height / 100;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896);
const ratioCount = Math.sqrt(height * height + width * width) / 1000;

const isTablet = () => {
  if (isIphone) {
    return Platform.isPad;
  } else {
    return height / width <= 1.6;
  }
};

const APP_FONTS = {
  OPENSANS_REGULAR: 'OpenSans-Regular',
  OPENSANS_BOLD: 'OpenSans-Bold',
  OPENSANS_LIGHT: 'OpenSans-Light',
  OPENSANS_SEMIBOLD: 'OpenSans-SemiBold',
};
export default {
  countPixelRatio: (size) => size * ratioCount,
  responsiveHeight: (size) => size * heightPer,
  responsiveWidth: (size) => size * widthPer,
  smartScale: (value) => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
    if (deviceType == 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: (value) => {
    const tempWidth = width;
    if (deviceType == 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },
  fontRegular: APP_FONTS.OPENSANS_REGULAR,
  fontBold: APP_FONTS.OPENSANS_BOLD,
  fontLight: APP_FONTS.OPENSANS_LIGHT,
  fontSemibold: APP_FONTS.OPENSANS_SEMIBOLD,
  width,
  height,
  isPhone: !isTablet(),
  isTab: isTablet(),
  isIphone,
  isAndroid,
};
