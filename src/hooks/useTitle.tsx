import { useEffect, useState } from "react";

export const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    (htmlTitle as HTMLTitleElement).innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
