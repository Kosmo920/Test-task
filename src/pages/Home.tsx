import { FC, useState } from "react";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { IVagonData } from "@/interfaces/Vagon.interface";
import VagonItem from "@/services/VagonItem";
import { Box, Input, Select } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";


const montserrat = Montserrat({ subsets: ["latin"] });

const Home: FC<IVagonData> = ({vagons}) => {
  
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  const SortedVagons = sortBy === "VagonNumber" ?
  vagons.slice().sort((a,b) => a.VagonNumber.localeCompare(b.VagonNumber)):
  sortBy === "DepartureStationName" ?
  vagons.slice().sort((a,b) => a.DepartureStationName.localeCompare(b.DepartureStationName)):
  vagons

  const SearchVagons = SortedVagons.filter((vagon) =>
    vagon.VagonNumber.includes(search)
  );

    return(
        <>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
      <Layout>
      
      <Box bg='#676767' display='flex' alignItems='center' justifyContent='center' h='30px'>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="" disabled>Sort by</option>
              <option value="VagonNumber">Vagon Number</option>
              <option value="DepartureStationName">Departure Station Name</option>
      </Select>
      <Input bg='#757575' borderRadius={5} h='25px' value={search} onChange={(e) => setSearch(e.target.value)}></Input>
        </Box>
      </Layout>
      
       {SearchVagons.length ? SearchVagons.map(vagon => <VagonItem key={vagon.VagonNumber} vagon={vagon}/>) : <Box display='flex' bg='white'>Vagons not found</Box>}

        
      </main>
    </>
    )
}

export default Home