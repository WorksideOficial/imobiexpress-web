export function setLocalStorage(user) {
  localStorage.setItem('Yt', JSON.stringify(user));
}

export function getLocalStorage() {
  const json = localStorage.getItem('Yt');
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user ?? null;
}