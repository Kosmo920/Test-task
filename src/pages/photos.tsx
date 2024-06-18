import Layout from "@/components/layout/Layout";
import { Box } from "@chakra-ui/react";
import fs from 'fs';
import { GetServerSideProps, NextPage } from "next";

interface PhotosPageProps {
  photos: { name: string; path: string }[];
}

const PhotosPage: NextPage<PhotosPageProps> = ({ photos }) => {
  return (
    <Layout>
      {photos.map(({ name, path }) => (
        <Box key={path} bg='white' margin='5px' border='1px solid' borderRadius='8px' display='inline-block'>
          <img src={path} alt={name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p>{name}</p>
        </Box>
      ))}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<PhotosPageProps> = async () => {
  const photosDir = `${process.cwd()}/public/photos`;
  const photoFiles = fs.readdirSync(photosDir);
  const photos = photoFiles.map(file => ({ name: file, path: `/photos/${file}` }));
  return {
    props: { photos },
  };
};

export default PhotosPage;
