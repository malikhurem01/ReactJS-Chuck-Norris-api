import { CensorSensor } from 'censor-sensor';
const Censor = new CensorSensor();
Censor.addWord('Quran');
Censor.addWord('quran');
Censor.addWord('Bible');
Censor.addWord('bible');
Censor.addWord('allah');
Censor.addWord('Allah');
Censor.addWord('alah');
Censor.addWord('Alah');
Censor.addWord('God');
Censor.addWord('god');
Censor.addWord('Gods');
Censor.addWord('gods');
Censor.addWord('Prophet');
Censor.addWord('Prophets');
Censor.addWord('prophet');
Censor.addWord('prophets');
Censor.addWord('Mohammad');
Censor.addWord('mohammad');
Censor.addWord('muhamed');
Censor.addWord('Muhamed');
Censor.addWord('Jesus');
Censor.addWord('jesus');
Censor.addWord('islam');
Censor.addWord('Islam');
Censor.addWord('muslim');
Censor.addWord('Muslim');
Censor.addWord('muslims');
Censor.addWord('Muslims');
Censor.addWord('fucked');
Censor.addWord('fuck');
Censor.addWord('universe');
Censor.addWord('Universe');
Censor.addWord('created');
Censor.addWord('Religion');
Censor.addWord('religion');
Censor.addWord('Religions');
Censor.addWord('religions');
Censor.addWord('Holy');
Censor.addWord('holy');
Censor.addWord('keyboard');
Censor.addWord('asshole');
Censor.addWord('masturbate');
Censor.addWord('masturbates');
Censor.addWord('masturbated');
Censor.addWord('Porn');
Censor.addWord('Pornography');
Censor.addWord('porn');
Censor.addWord('pornography');
Censor.addWord('murder');
Censor.addWord('kill');
Censor.addWord('killed');
Censor.addWord('father');
Censor.addWord('virgin');
Censor.addWord('virginity');

const checkData = data => {
  let arr = data.toString().split(' ');
  let isValid = true;
  for (let i = 0; i < arr.length; i++) {
    if (Censor.isProfane(arr[i])) {
      console.log(
        `This joke was skipped because it contains a prohibited word: ${arr[i]}`
      );
      isValid = false;
      break;
    }
  }
  return isValid;
};

export default checkData;
