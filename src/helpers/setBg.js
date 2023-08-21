const setBg = path => {
  switch (path) {
    case "/":
      return "bg--home";

    case "/crew":
      return "bg--crew";

    case "/destination":
      return "bg--destination";

    case "/technology":
      return "bg--technology";

    default:
      return "bg--home";
  }
};

export default setBg;
