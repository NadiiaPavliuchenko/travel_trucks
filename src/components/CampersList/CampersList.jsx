import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import {
  Card,
  ImageThumb,
  CamperInfo,
  CamperHeader,
  Title,
  Price,
  Favourite,
  CamperSubheader,
  CamperRating,
  Reviews,
  CamperLocation,
  StyledLocation,
  CamperDescription,
  StyledButton,
} from "./CampersList.styled";
import Badges from "../Badges/Badges";
import { useNavigate } from "react-router-dom";

const CampersList = () => {
  const navigate = useNavigate();
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers &&
        campers.map((camper) => (
          <Card key={camper.id}>
            <ImageThumb>
              <img src={camper.gallery[0].thumb} alt={camper.name} />
            </ImageThumb>
            <CamperInfo>
              <CamperHeader>
                <Title>{camper.name}</Title>
                <Price>&#8364; {camper.price.toFixed(2)}</Price>
                <Favourite>
                  <svg width="26" height="24">
                    <use href="../../assets/sprite.svg#heart"></use>
                  </svg>
                </Favourite>
              </CamperHeader>
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
              <CamperDescription>{camper.description}</CamperDescription>
              <Badges
                equipment={{
                  ac: camper.AC,
                  bathroom: camper.bathroom,
                  kitchen: camper.kitchen,
                  tv: camper.TV,
                  radio: camper.radio,
                  frige: camper.refrigerator,
                  microwave: camper.microwave,
                  gas: camper.gas,
                  water: camper.water,
                }}
              />
              <StyledButton onClick={() => navigate(`/catalog/${camper.id}`)}>
                Show More
              </StyledButton>
            </CamperInfo>
          </Card>
        ))}
    </ul>
  );
};

export default CampersList;

/*{
    "id":"1",
    "name":"Road Bear C 23-25",
    "price":10000,
    "rating":4.5,
    "location":"Ukraine, Kyiv",
    "description":"Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
    "form":"alcove",
    "length":"7.3m",
    "width":"2.65m",
    "height":"3.65m",
    "tank":"208l",
    "consumption":"30l/100km",
    "transmission":"automatic",
    "engine":"diesel",
    "AC":true,
    "bathroom":true,
    "kitchen":false,
    "TV":true,
    "radio":true,
    "refrigerator":false,
    "microwave":true,
    "gas":false,
    "water":true,
    "gallery":[
        {
         "thumb":"https://ftp.goit.study/img/campers-test-task/1-1.webp",
         "original":"https://ftp.goit.study/img/campers-test-task/1-1.webp"
        },
        {
         "thumb":"https://ftp.goit.study/img/campers-test-task/1-2.webp",
         "original":"https://ftp.goit.study/img/campers-test-task/1-2.webp"
        },
        {
         "thumb":"https://ftp.goit.study/img/campers-test-task/1-3.webp",
         "original":"https://ftp.goit.study/img/campers-test-task/1-3.webp"
        }
    ],
    "reviews":[
            {
             "reviewer_name":"Alice",
             "reviewer_rating":5,
             "comment":"Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
            },
            {
             "reviewer_name":"Bob",
             "reviewer_rating":4,
             "comment":"Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
            }
    ]
}*/
