import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../redux/api/api";
import Loader from "../../components/Loader/Loader";
import Error from "../Error/Error";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import { StyledCamperPage } from "./Camper.styled";

const Camper = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCamper = async () => {
      try {
        const result = await api.get(`/campers/${id}`);
        setCamper(result.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getCamper();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <StyledCamperPage>
      {camper && <CamperInfo camper={camper} />}
    </StyledCamperPage>
  );
};

export default Camper;
