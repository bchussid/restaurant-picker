import { useState, useEffect } from "react";
import axios from "axios";

const localCache = {};

function usePlaceList(chosenCat) {
  const [placeList, setPlaceList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!chosenCat) setPlaceList([]);
    else if (localCache[chosenCat]) setPlaceList(localCache[chosenCat]);
    else requestPlaceList();

    async function requestPlaceList() {
      setPlaceList([]);
      setLoading(true);
      const res = await axios.get(`/public/assets/places.json`);

      localCache[chosenCat] = res.data[chosenCat] || [];
      setPlaceList(localCache[chosenCat]);
      setLoading(false);
    }
  }, [chosenCat]);

  return [placeList, loading];
}

export default usePlaceList;
