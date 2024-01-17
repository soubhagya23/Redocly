import React, { useEffect, useState } from "react";
import { RedocStandalone } from "redoc";
import Swagger from "./swagger.json";
import Collection from './content.json'
import VirtualAPI from './virtualApi.json'
import "./index.css";
import Header from "./header";
import Footer from "./footer";
import MetaData from "./MetaData";

export default function APIDetails(props) {

  const [json, setJson] = useState(Swagger)

  useEffect(() => {
    console.log(window.location.href);
    const query = new URLSearchParams(window.location.search);
    const apiName = query.get('apiName');
    console.log(query);
    console.log({apiName});

    if(apiName === 'Collection alert based on date and time'){
      setJson(Collection)
      console.log({json});
    } else if (apiName === 'Virtual Account Creation API'){
      setJson(VirtualAPI);
    }
  }, [])

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
                  primary: '#333333',
                  secondary: ({ colors }) => lighten(colors.tonalOffset, colors.text.primary),
                },
                responses: {
                  success: {
                    backgroundColor: ({ colors }) => transparentize(0.93, colors.success.main),
                    tabTextColor: ({ colors }) => colors.responses.success.color,
                  },
                  error: {
                    color: ({ colors }) => colors.error.main,
                    backgroundColor: ({ colors }) => transparentize(0.93, colors.error.main),
                    tabTextColor: ({ colors }) => colors.responses.error.color,
                  },
                  redirect: {
                    color: ({ colors }) => colors.warning.main,
                    backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
                    tabTextColor: ({ colors }) => colors.responses.redirect.color,
                  },
                  info: {
                    color: '#87ceeb',
                    backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
                    tabTextColor: ({ colors }) => colors.responses.info.color,
                  },
                },
                http: {
                  get: '#2F8132',
                  post: '#186FAF',
                  put: '#95507c',
                  options: '#947014',
                  patch: '#bf581d',
                  delete: '#cc3333',
                  basic: '#707070',
                  link: '#07818F',
                  head: '#A23DAD',
                },
              },

              typography: {
                fontSize: "15px",
                lineHeight: "1.5em",
                fontWeightRegular: "400",
                fontWeightBold: "600",
                fontWeightLight: "300",

                headings: {
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.6em',
                },
                code: {
                  fontSize: '13px',
                  fontFamily: 'Courier, monospace',
                  lineHeight: ({ typography }) => typography.lineHeight,
                  fontWeight: ({ typography }) => typography.fontWeightRegular,
                  color: '#e53935',
                  backgroundColor: 'rgba(38, 50, 56, 0.05)',
                  wrap: false,
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
              fab: {
                backgroundColor: '#f2f2f2',
                color: '#0065FB',
              },
            },
          }
          }
        />
      </div>
      <Footer />
    </>
  );
}
