import { useSuccessStories ,useHomelessDogNumber} from "@/hook/useStory";
import Loading from "./Loading";
import { Box } from "@mui/material";
import { DogFamily } from "./DogFamily";


export function SuccessStory  () {
    const {data, isLoading} =useSuccessStories();
  const {data:dogHomeless}=useHomelessDogNumber();


    if (isLoading){
        return <Loading/>
    }

    return (<Box>
      {dogHomeless && data &&
      <>
  <h3>There are {dogHomeless} dogs in need</h3>

  <h3>There are {data.length} dogs found their own home</h3>

  <Box
                  sx={{
                    mt: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(100px, 400px))',
                  }}
                >
{data.map(story=>{return <DogFamily data={story}/>})}
        </Box>
        </> }
</Box>
    );
}