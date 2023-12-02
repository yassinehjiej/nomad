import * as Font from 'expo-font';
import { FONTASTIQUE, MONTSERRAT_BOLD, NUNITO } from '../theme/fonts';

export const loadFonts = async () => {
  await Font.loadAsync({
    'default': FONTASTIQUE,
    'nunito': NUNITO,
    'montserrat_bold': MONTSERRAT_BOLD
  });
};
