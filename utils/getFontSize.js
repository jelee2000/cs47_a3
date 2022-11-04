import { Dimensions } from "react-native"

const getFontSize = () => {
    const windowWidth = Dimensions.get('window').width;
    if (windowWidth > 500) {
        return 24
    } else {
        return 12
    }
}

export default getFontSize