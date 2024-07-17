import React from "react";

const ServerIsUp = () => {
  const { html, errors } = render(
    <mjml>
      <mj-head>
        <mj-font
          name="Roboto"
          href="https://fonts.googleapis.com/css?family=Roboto:300,500"
        ></mj-font>
        <mj-attributes>
          <mj-all font-family="Roboto, Helvetica, sans-serif"></mj-all>
          <mj-text
            font-weight="300"
            font-size="16px"
            color="#616161"
            line-height="24px"
          ></mj-text>
          <mj-section padding="0px"></mj-section>
        </mj-attributes>
      </mj-head>
      <mj-body>
        <mj-section padding="20px 0">
          <mj-column width="100%">
            <mj-text align="left" font-size="10px">
              Message from BlueWave Uptime Service
            </mj-text>
          </mj-column>
          <mj-column width="45%" padding-top="20px">
            <mj-text
              align="center"
              font-weight="500"
              padding="0px"
              font-size="18px"
              color="green"
            >
              Google.com is up
            </mj-text>
            <mj-divider border-width="2px" border-color="#616161"></mj-divider>
          </mj-column>
        </mj-section>
        <mj-section>
          <mj-column width="100%">
            <mj-text>
              <p>Hello Alex!</p>
              <p>
                {" "}
                Your latest incident is resolved and your monitored service is
                up again.
              </p>
              <p>
                <b>Monitor name:</b> Google.com
              </p>
              <p>
                <b>URL:</b> https://google.com
              </p>
              <p>
                <b>Problem:</b> Connection timeout
              </p>
              <p>
                <b>Start date:</b> Jun 8, 2024 8:15pm
              </p>
              <p>
                <b>Resolved date:</b> Jun 8, 2024 8:15pm
              </p>
              <p>
                <b>Duration:</b>3 minutes and 15 seconds
              </p>
            </mj-text>
          </mj-column>
          <mj-column width="100%">
            <mj-divider border-width="1px" border-color="#E0E0E0"></mj-divider>
            <mj-button background-color="#1570EF">
              View incident details
            </mj-button>
            <mj-text font-size="12px">
              <p>This email was sent by BlueWave Uptime.</p>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  );

  if (errors.length > 0) {
    console.error("MJML Errors:", errors);
    return null; // Handle errors gracefully
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ServerIsUp;
