import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { SuccessStory } from "./SuccessStory";

export const SitePage: NextPage = () => {
    return (
        <>
          <Head>
            <title>Dashboard for Contentful Demo</title>
          </Head>
          <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Grid>
          <Grid container>
            <Grid item md={12} xs={12}>
              <SuccessStory />
            </Grid>
          </Grid>
        </Grid>
      </Box>
         </>
    )
}
