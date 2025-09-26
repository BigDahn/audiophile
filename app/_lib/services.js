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

export async function getAllEarPhones() {
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

export async function getEarphoneSlugName(name) {
 
  try {
    const res = await fetch(
      "https://dahn-audiophile-seven-sandy.vercel.app/data/data.json"
    );
    const data = await res.json();

    const result = data.find((s) => s.slug === name);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSpeakerBySlugName(name) {
  try {
    const res = await fetch(
      "https://dahn-audiophile-seven-sandy.vercel.app/data/data.json"
    );
    const data = await res.json();

    const result = data.find((data) => data.slug === name);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getHeadPhoneBySlugName(name) {
  try {
    const res = await fetch(
      "https://dahn-audiophile-seven-sandy.vercel.app/data/data.json"
    );
    const data = await res.json();

    const result = data.find((data) => data.slug === name);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
