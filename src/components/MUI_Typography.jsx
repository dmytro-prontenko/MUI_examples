import { Typography } from "@mui/material";

const MUITypography = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4">H4 heading</Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H6 heading</Typography>
      <Typography variant="h6" component={"h1"}>
        H1 heading with H6 style(see markup)
      </Typography>
      <Typography variant="h5" component={"h1"}>
        H1 heading with H5 style(see markup)
      </Typography>
      <br />
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <br />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam
        explicabo repudiandae eaque adipisci, eum debitis officia,
        exercitationem ad, laborum totam sunt. Maiores vel odio, aliquam
        explicabo suscipit est eos.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        amet, corporis nihil odio accusantium incidunt molestias at non
        dignissimos voluptates perferendis sunt officia laborum aliquam veniam
        atque iusto. Doloribus, ipsa?
      </Typography>
      <Typography variant="body1" component={"div"}>
        By default the &lt;p&gt; using for body1 and body2. But its easy to
        change with <em>component</em> property
      </Typography>
    </>
  );
}

export default MUITypography;
