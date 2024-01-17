import React, { useEffect, useState } from "react";
import { RedocStandalone } from "redoc";
import Swagger from "./swagger.json";
import Collection from "./content.json";
import VirtualAPI from "./virtualApi.json";
import UPIColl from "./UPI-Collections-API .json"
import "./index.css";
import Header from "./header";
import Footer from "./footer";
import MetaData from "./MetaData";

export default function APIDetails(props) {
  const [json, setJson] = useState(Swagger);

  useEffect(() => {
    console.log(window.location.href);

    const query = new URLSearchParams(window.location.search);
    const apiPath = query.get("apiPath");

    console.log(query);
    console.log({ apiPath });

    if (apiPath === "CollectionAlert") {
      setJson(Collection);
    } else if (apiPath === "VirtualAPI") {
      setJson(VirtualAPI);
      
      
    }
    else if (apiPath === "UPI-Collections-API"){
      setJson(UPIColl)
    }
  }, []);

  return (
    <>
      <MetaData />
      <Header />
      <div id="redoc-container" className="something">
        <RedocStandalone
          specUrl={json}
          options={{
            disableSearch: true,
            suppressWarnings: true,
            requiredPropsFirst: true,
            sortPropsAlphabetically: true,
            pathInMiddlePanel: true,
            theme: {
              colors: {
                responses: {
                  success: {
                    color: "black",
                    backgroundColor: "#3040874d",
                  },
                },
                text: {
                  primary: "#424242",
                  secondary: "#424242",
                },
                tonalOffset: 0.2,
              },

              typography: {
                fontSize: "15px",
                lineHeight: "1.5em",
                fontWeightRegular: "400",
                fontWeightBold: "600",
                fontWeightLight: "300",
                fontFamily: 'Roboto, sans-serif',
                headings: {
                  fontWeight: "600",
                },
              },
              schemaView: {
                linesColor: "#DFC350",
                typeNameColor: "#DFC350",
                typeTitleColor: "#DFC350",
                requireLabelColor: "#DFC350",
                nestingSpacing: "#DFC350",
              },
              sidebar: {
                activeBgColor: "hsla(229, 48%, 36%, 1)",
                activeTextColor: "hsla(229, 48%, 36%, 1)",
                backgroundColor: "#ededed",
              },

              rightPanel: {
                backgroundColor: "white",
                width: "40%",
                textColor: "#ffffff",
                fontFamily:'"Roboto",sans-serif'
              },

              codeBlock: {
                fontSize: "15px",
                color: "green",
                backgroundColor: "#000000",
                borderRadius: "20px",
                tokens: {
                  color: "#a0fbaa",
                },
                codeSample: {
                  color: "#a0fbaa",
                },
                text: {
                  secondary: {
                    color: "black",
                  },
                },
              },
              components: {
                borderRadius: 20,
              },
            },
          }}
        />
      </div>
      <Footer />
    </>
  );
}
