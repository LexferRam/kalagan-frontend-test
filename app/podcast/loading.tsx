import { Grid, Skeleton } from "@mui/material"

const loading = () => {
  return (
    <Grid container gap={5} flexDirection="row" justifyContent="space-around">
      <Grid item style={{ marginRight: 30, marginTop: 30 }}>
        <Skeleton style={{ borderRadius: 10 }} variant="rectangular" width={400} height={560} />
      </Grid>
      <Grid item justifyContent="center">
        <Grid item style={{ marginRight: 30, marginTop: 30 }}>
          <Skeleton style={{ borderRadius: 10 }} variant="rectangular" width={600} height={80} />
        </Grid>
        <Grid item style={{ marginRight: 30, marginTop: 30 }}>
          <Skeleton style={{ borderRadius: 10 }} variant="rectangular" width={600} height={420} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default loading