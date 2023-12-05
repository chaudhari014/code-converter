import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default Loading;
