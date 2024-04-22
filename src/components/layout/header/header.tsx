import Link from "next/link";
import { FC } from "react"
import { Box } from "@chakra-ui/react";

const Header: FC = () =>{
    return (
    <Box bg='#575757' display='flex' alignItems='center' justifyContent='center' h='60px'>
        <header>
        <Link href="/">Home</Link>
        <Link href="/photos">Photo</Link>
        </header>
    </Box>
    )
}

export default Header