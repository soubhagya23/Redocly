import React from "react";
import { RedocStandalone } from "redoc";
import Swagger from "./swagger.json";
import "./index.css";
import Header from "./header";
import Footer from "./footer";
import MetaData from "./MetaData";

export default function APIDetails(props) {
  return (
    <>
  {/*    <Header />  */}
      <div id="redoc-container" className="something">
        <RedocStandalone
          specUrl={Swagger}
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
                fontSize: "14px",
                lineHeight: "1.5em",
                fontWeightRegular: "400",
                fontWeightBold: "600",
                fontWeightLight: "300",

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
              },

              codeBlock: {
                fontSize: "14px",
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
   {/*   <Footer />  */}
    </>
  );
}
