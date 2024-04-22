import Home from "@/pages/Home";
import { IVagonData } from "@/interfaces/Vagon.interface";
import { VagonService } from "@/services/vagon.service";
import { GetServerSideProps, NextPage } from "next";

const HomePage: NextPage<IVagonData> = ({vagons}) => {
  return <Home vagons={vagons}/>
}

export const getServerSideProps: GetServerSideProps<IVagonData> = async () => {
  const vagons = await VagonService.getAll()
  return {
    props: {vagons},
  }
}

export default HomePage