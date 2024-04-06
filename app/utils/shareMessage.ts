import {Alert, Share} from 'react-native';

export async function onShare(message: string) {
  try {
    await Share.share({
      message,
    });
  } catch (error: any) {
    Alert.alert(error.message);
  }
}
