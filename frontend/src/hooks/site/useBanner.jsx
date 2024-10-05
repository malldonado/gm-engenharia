import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function useBanner() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    pinterest: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar dados do banner
  const fetchBannerData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts");
      setData(response.data.data || []);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para buscar dados de redes sociais
  const fetchSocialMediaData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user-update");
      const socialMediaData = response.data;
      setFormData({
        facebook: socialMediaData.facebook,
        instagram: socialMediaData.instagram,
        pinterest: socialMediaData.pinterest,
      });
    } catch (err) {
      setError(err);
    }
  };

  // useEffect para carregar dados do banner
  useEffect(() => {
    fetchBannerData();
  }, []);

  // useEffect para carregar dados de redes sociais
  useEffect(() => {
    fetchSocialMediaData();
  }, []);

  // Propriedades de animação do slide
  const zoomInProperties = {
    scale: 1.4,
  };

  // Renderização condicional
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return {
    data,
    formData,
    zoomInProperties,
  };
}

export default useBanner;
