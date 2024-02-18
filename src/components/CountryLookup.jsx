"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState('');

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country_name);
      if (!response) return;
      setCountry(response);
    };

    getCountry();
  }, []);
  return <div>{country}</div>;
}

