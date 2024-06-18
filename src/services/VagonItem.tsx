import { IVagonDataSingle } from "@/interfaces/Vagon.interface";
import { Box, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

const VagonItem: FC<IVagonDataSingle> = ({ vagon }) => {
    const [photo, setPhoto] = useState<string | null>(null);

    const AddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const response = await fetch(`/api/uploadPhoto?vagonNumber=${vagon.VagonNumber}`, {
              method: 'POST',
              body: file,
            });
            const data = await response.json();
            if (response.ok) {
              setPhoto(data.photoPath);
            } else {
              console.error('Error uploading photo:', data.error);
            }
            
        }
    };

    return (
        <Box bg='white' margin='5px' border='1px solid' w='200px' h='320px' borderRadius='8px' display='inline-block'>
            <h2>{vagon.VagonNumber}</h2>
            <h2>{vagon.VagonType}</h2>
            <h2>{vagon.CargoName}</h2>
            <h2>{vagon.OwnerName}</h2>
            <h2>{vagon.DepartureStationName}</h2>
            <Box display='flex' alignItems='center' justifyContent='center' marginBottom='10px' w='200px' h='100px'>
            {photo && (
                <img src={photo} alt={`Фото вагона ${vagon.VagonNumber}`} style={{ maxWidth: '100%', maxHeight: '100px' }} />  
            )}
            </Box>
            <Input type="file" accept="image/*" onChange={AddPhoto} />
        </Box>
    );
};

export default VagonItem;
