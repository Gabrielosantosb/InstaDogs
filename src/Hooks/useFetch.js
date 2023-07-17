import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { View } from "react-native";

// import { Container } from './styles';

export const useFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError("");
      setLoading(true);
      response = await fetch(url, options);
      json = response.json();
      if (response.status != 200) throw new Error(json.message);

    } catch (error) {
      json = null
      console.log("Error aqui: " + error);
    } finally {
      setData(json)
      setLoading(false);
      return{response, json}
    }
  }, []);
  return {
    data,
    loading,
    error,
    request,
  };
};
