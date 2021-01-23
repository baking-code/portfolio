import xw from 'xwind';
import withHeader from "../../components/withHeader";


export default withHeader(() => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
      Hello
    </div>
  </div>
));
