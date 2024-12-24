const replaceItemInURL = (url: string, newName: string, type: number) => {
  const parts = url.split("/");
  const position = parts.length - type;
  if (parts[position]) parts[position] = newName;
  return parts.join("/");
};
export const replaceViewItemInURL = (url: string, newName: string) => {
  return replaceItemInURL(url, newName, 1);
};

export const replaceDealItemInURL = (url: string, newName: string) => {
  return replaceItemInURL(url, newName, 2);
};

export const replacePageItemInURL = (url: string, newName: string) => {
  return replaceItemInURL(url, newName, 3);
};
