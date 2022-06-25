// import { RemixBrowser } from "@remix-run/react";
// import { hydrate } from "react-dom";

// hydrate(<RemixBrowser />, document);

import { RemixBrowser } from "@remix-run/react";
import { createRoot } from "react-dom/client";

const root = createRoot(document);
root.render(<RemixBrowser />);
