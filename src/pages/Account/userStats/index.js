import React, { useEffect } from "react";
import { UserHeader } from "../userHeader";
import { Title } from "../../../Styles/global";
import { useFetch } from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../contants/endpoints";
import { Loading } from "../../../common/loading";
import { Error } from "../../../common/error";
import { UserStatsGraphs } from "./Graphs";

// import { Container } from './styles';

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

