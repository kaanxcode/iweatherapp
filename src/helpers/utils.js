import { Text } from "react-native";
import I01d from "../../assets/01d.svg";
import I01n from "../../assets/01n.svg";
import I02d from "../../assets/02d.svg";
import I02n from "../../assets/02n.svg";
import I03d from "../../assets/03d.svg";
import I03n from "../../assets/03n.svg";
import I10d from "../../assets/10d.svg";
import I10n from "../../assets/10n.svg";
import I11d from "../../assets/11d.svg";
import I11n from "../../assets/11n.svg";

export const iconIdToImage = (iconId, width = 140, height = 120) => {
  switch (iconId) {
    case "01d":
      return <I01d width={width} height={height} />;
    case "01n":
      return <I01n width={width} height={height} />;
    case "02d":
      return <I02d width={width} height={height} />;
    case "02n":
      return <I02n width={width} height={height} />;
    case "03d":
    case "04d":
      return <I03d width={width} height={height} />;
    case "03n":
    case "04n":
      return <I03n width={width} height={height} />;
    case "09d":
    case "10d":
      return <I10d width={width} height={height} />;
    case "09n":
    case "10n":
      return <I10n width={width} height={height} />;
    case "11d":
      return <I11d width={width} height={height} />;
    case "11n":
      return <I11n width={width} height={height} />;
    default:
      return <Text>Icon not found</Text>;
  }
};
export const getFirstTwoDigits = (temperature) => {
  return temperature.toString().slice(0, 2);
};
export const getFirstDigits = (temperature) => {
  return temperature.toString().slice(0, 1);
};

export const capitalizeFirstLetter = (description) => {
  return (
    description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
  );
};
