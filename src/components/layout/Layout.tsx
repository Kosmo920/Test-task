import { FC, PropsWithChildren } from "react";
import Header from "./header/header";
import { Box } from "@chakra-ui/react";

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <Box>
        <Header/>
        {children}
        </Box>
        )
}

export default Layout