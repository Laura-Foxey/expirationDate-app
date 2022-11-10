import React, { useState } from 'react';
import { Text } from 'react-native';


export default function ExpirationDate({expirationDate}) {
    const today = Date.parse(new Date());
    const exp = new Date(expirationDate).getTime();

    const calcCountdown = (exp) => {
        return Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
      };

  return (
    <Text>{calcCountdown(exp)}</Text>
  );
}

