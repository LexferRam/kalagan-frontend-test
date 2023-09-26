import { Grid, Skeleton } from "@mui/material"

const loading = () => {
  return (
    <Grid container gap={5} justifyContent="center">
      <Grid container justifyContent="flex-end">
        <Grid item style={{ marginRight: 30, marginTop: 30 }}>
          <Skeleton style={{ borderRadius: 10 }} variant="rectangular" width={300} height={60} />
        </Grid>
      </Grid>
      {Array.from(new Array(18)).map((item, index) => (
        <Grid key={index} item>
          <Skeleton style={{ borderRadius: 10 }} variant="rectangular" width={200} height={200} />
        </Grid>
      ))}
    </Grid>
  )
}

export default loading