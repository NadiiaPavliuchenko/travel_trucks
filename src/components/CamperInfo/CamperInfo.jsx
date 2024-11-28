import {
  CamperDescription,
  CamperLocation,
  CamperRating,
  CamperSubheader,
  Gallery,
  ImageThumb,
  Price,
  Reviews,
  StyledCamperInfo,
  StyledLocation,
  Title,
} from "./CamperInfo.styled";

const CamperInfo = ({ camper }) => {
  return (
    <StyledCamperInfo>
      <Title>{camper.name}</Title>
      <CamperSubheader>
        <CamperRating>
          <svg width="16" height="16">
            <use href="../../assets/sprite.svg#star"></use>
          </svg>
          <Reviews>
            {camper.rating}({camper.reviews.length} Reviews)
          </Reviews>
        </CamperRating>
        <CamperLocation>
          <svg width="16" height="16">
            <use href="../../assets/sprite.svg#map"></use>
          </svg>
          <StyledLocation>{camper.location}</StyledLocation>
        </CamperLocation>
      </CamperSubheader>
      <Price>&#8364; {camper.price.toFixed(2)}</Price>
      <Gallery>
        {camper.gallery.map((item, index) => (
          <ImageThumb key={index}>
            <img src={item.thumb} alt="Camper Image" />
          </ImageThumb>
        ))}
      </Gallery>
      <CamperDescription>{camper.description}</CamperDescription>
    </StyledCamperInfo>
  );
};

export default CamperInfo;
