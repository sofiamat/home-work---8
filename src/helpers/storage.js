export const save = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.err("не вдалося зберегти дані в сховище", err);
  }
};

export const load = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    const data = JSON.parse(serializedData);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch {
    console.err("не вдалося завантажити дані в сховище", err);
  }
};

export const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.err("не вдалося видалити дані в сховище", err);
  }
};

export const deleteInfo = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.err("не вдалося видалити дані в сховище", err);
  }
};
