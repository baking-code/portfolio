import xw from "xwind";
import withHeader from "../components/withHeader";

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}></div>
  </div>
);

export default withHeader(Index);
