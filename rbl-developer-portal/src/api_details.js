import React from "react";
import { RedocStandalone } from "redoc";

import Swagger from "./swagger.json";

export default function APIDetails(props) {
  return (
    <>
      {/*  <Header /> */}
      <div id="redoc-container">
        <RedocStandalone
          onComplete={() => console.log("Redoc rendering complete")}
          onHashChange={(hash) => console.log("Hash changed:", hash)}
          specUrl={Swagger}
          options={{
            disableSearch: true,

            theme: {
              colors: { primary: { main: "#dd5522" } },
              sidebar: {
                activeBgColor: "red",
                activeTextColor: "green",
              },

              rightPanel: {
                backgroundColor: "white",
                width: "30%",
                textColor: "white",
              },
              codeBlock: {
                backgroundColor: "black",
                borderRadius: "20px",
                tokens: {
                  error: {
                    color:'green'
                  }
                }
              
              },
              components: {
                borderRadius:20
              },
           
            },
          }}
        />
      </div>
      {/*  <Footer /> */}
    </>
  );
}
