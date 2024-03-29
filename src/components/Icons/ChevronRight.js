import Svg, { Path } from "react-native-svg";

const ChevronRight = (props) => (
  <Svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.90397 0.498242C6.23965 -0.166081 5.16257 -0.166081 4.49824 0.498242C3.83392 1.16257 3.83392 2.23965 4.49824 2.90397L11.5943 10L4.49824 17.096C3.83392 17.7604 3.83392 18.8374 4.49824 19.5018C5.16257 20.1661 6.23965 20.1661 6.90397 19.5018L14.8865 11.5192C15.0147 11.4458 15.1354 11.3544 15.2449 11.2449C15.5878 10.902 15.7537 10.4492 15.7426 9.99998C15.7537 9.55073 15.5878 9.09795 15.2449 8.7551C15.1354 8.6456 15.0147 8.55416 14.8865 8.48076L6.90397 0.498242Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default ChevronRight;
