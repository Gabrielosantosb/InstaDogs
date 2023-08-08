import React, { useEffect } from "react";
import { UserHeader } from "../userHeader";
import { Title } from "../../../Styles/global";
import { useFetch } from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../contants/endpoints";
import { Loading } from "../../../common/loading";
import { Error } from "../../../common/error";

// import { Container } from './styles';

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if(loading) return<Loading/>
  if(error) return<Error error = {error}/>
  if(data){
    return (
      <section className="animeLeft">
     
        <UserHeader>
          <UserGraphs
          <Title>Estatisticas</Title>
        </UserHeader>
        <p>Teste</p>
      </section>
    );
  }
  else return null
  
};
