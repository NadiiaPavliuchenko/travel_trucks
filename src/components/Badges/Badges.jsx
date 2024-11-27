import { BaseBadge } from "../../styles/baseButton.styled";
import { BadgesContainer, BadgeIcon, BadgeText } from "./Badges.styled";

const Badges = ({ equipment }) => {
  const categories = Object.keys(equipment);
  const values = Object.values(equipment);

  return (
    <BadgesContainer>
      {categories &&
        categories.map((item, index) => {
          if (values[index] === true) {
            return (
              <BaseBadge key={index}>
                <BadgeIcon width="20" height="20">
                  <use href={`../../assets/sprite.svg#${item}`}></use>
                </BadgeIcon>
                <BadgeText>{item}</BadgeText>
              </BaseBadge>
            );
          }
        })}
    </BadgesContainer>
  );
};

export default Badges;
