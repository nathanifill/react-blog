import { useEffect, useState } from "react";
import { BLOG_NAME, TITLE_SEPARATOR } from "../pages/_app";

const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);

  useEffect(() => {
    document.title = documentTitle + " " + TITLE_SEPARATOR + " " + BLOG_NAME;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};

export { useDocumentTitle };
