import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useAsyncStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key).then((data) => {
      if (data) setValue(JSON.parse(data));
    });
  }, [key]);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
