import { useState } from 'react';

export default function useDefaultstate() {

  const [phones, updatePhones] = useState([
        {
            id: "x01",
            name: "David",
            number: "+256704255XXX"
        },
        {
            id: "x02",
            name: "Lydia",
            number: "+256740550XXX"
        }
  ]);
    return [phones, updatePhones];
}