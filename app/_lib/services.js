export async function getAllHeadPhones() {
  try {
    const res = await fetch(
      "https://dahn-audiophile-seven-sandy.vercel.app/data/data.json"
    );
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllSpeakers() {
  try {
    const res = await fetch(
      "https://dahn-audiophile-seven-sandy.vercel.app/data/data.json"
    );
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
