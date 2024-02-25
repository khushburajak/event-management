import { Card, Link, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Link as RouteLink } from "react-router-dom";
import MyEventPrice from "./MyEventPrice";

// card style
const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),

  boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,

  "&:hover": {
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
  },
}));

const MytListItem = (props) => {
  const { _id,title, ticketPrice, category, eventImage, eventDate, location } =
    props.product;

  // label style
  const LabelStyle = styled("label")(({ theme }) => ({
    fontWeight: 600,
    color: "white",
    backgroundColor: theme.palette.success.main,
    padding: "4px 6px",
    borderRadius: theme.spacing(1),
    zIndex: 9,
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    textTransform: "uppercase",
  }));

  return (
    <CardStyle>
      {/* Image with Label */}
      <Box sx={{ pt: "100%", position: "relative" }}>
        {category && <LabelStyle>{category.name}</LabelStyle>}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
          }}
          component="img"
          src={eventImage}
          alt={title}
        />
      </Box>

      {/* bottom of the card */}
      <Box sx={{ py: 2.5, px: 3 }}>
        <Link
          component={RouteLink}
          to={"/detailsPage/" + _id}
          key={_id}
          product={props.product}
          underline="hover"
          color="inherit"
        >
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
          <Typography variant="subtitle1" noWrap>
            {eventDate}
          </Typography>
          <Typography variant="subtitle1" noWrap>
            {location}
          </Typography>
        </Link>

        {/* Price & Color box */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MyEventPrice price={ticketPrice} />
        </Box>
      </Box>
    </CardStyle>
  );
};

export default MytListItem;
