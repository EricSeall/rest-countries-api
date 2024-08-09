import React, { useEffect, useState } from "react";

interface Props {
  country: any;
}

export default function BorderCountry(props: Props) {
  console.log(props.country);
  return (
    <button className="border-country-button">
      {props.country ? props.country.name.common : null}
    </button>
  );
}
