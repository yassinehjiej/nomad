import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, data: any) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export const retrieveData = async (key:string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error("Error retieving data:", error);
    }
  };

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}