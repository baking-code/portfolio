import xw from "xwind";
import withHeader from "../../components/withHeader";
import ContentBlock from "../../components/ContentBlock";
import data from "../../static/data";

export default withHeader(() => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
      <ContentBlock content={data.about[0].description} />
    </div>
  </div>
));
